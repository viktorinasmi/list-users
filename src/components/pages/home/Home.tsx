import React, { useEffect } from "react";
// @ts-ignore
import styles from "./Home.module.scss";
import { Users } from "../../users";
import { useState } from "react";
import { Success } from "../../success";

// Список пользователей - https://reqres.in/api/users

export const Home = () => {
  const [users, setUsers] = useState([]); //список пользователей
  const [invites, setInvites] = useState<number[]>([]); //приглашение пользователей
  const [isLoading, setIsLoading] = useState(true); //загрузка
  const [success, setSuccess] = useState(false); //добавление пользователей для приглашения
  const [searchValue, setSearchValue] = useState(""); //поиска пользователей

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении пользователей");
      })
      .finally(() => setIsLoading(false));
  }, []);

  //логика поиска пользователя
  const onChangeSearchValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  //логика добавления пользователя для приглашения в массив
  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  //изменение состояния при добавлении всех юзеров
  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className={styles.container}>
      {success ? (
        <Success
          count={invites.length}
          onClick={() => window.location.reload()}
        />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
};
