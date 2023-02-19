import { Success } from "../../success";
import React, { useEffect } from "react";
// @ts-ignore
import styles from "./Home.module.scss";
import { Users } from "../../users";
import { useState } from "react";
import { json } from "stream/consumers";

// Список пользователей - https://reqres.in/api/users

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className={styles.container}>
      <Users items={users} isLoading={isLoading} />
      {/*<Success/>*/}
    </div>
  );
};
