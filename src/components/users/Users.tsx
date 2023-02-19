import { Button } from "../ui/button";
// @ts-ignore
import styles from "./Users.module.scss";
import { UserItem } from "./userItem";
import { Skeleton } from "../skeleton";
import { IUserItemData } from "../date/date";

interface IUsers {
  items: IUserItemData[];
  isLoading?: boolean;
  searchValue: string;
  onChangeSearchValue: (e: any) => void;
  invites: any;
  onClickInvite: (id: number) => void;
  onClickSendInvites: () => void;
}

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
}: IUsers) => {
  // @ts-ignore
  return (
    <div className={styles.container}>
      <div className={styles.containerInput}>
        <img className={styles.iconInput} src="icons/search.png" alt="search" />
        <input
          className={styles.input}
          type="text"
          name="search-contact"
          placeholder="Найти пользователя ..."
          onChange={onChangeSearchValue}
          value={searchValue}
        />
      </div>
      <div className={styles.wrapperUsers}>
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          items
            //   фильтр -Поиск на input
            .filter((item) => {
              const fullName = (item.first_name + item.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                item.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((item) => (
              <UserItem
                isInvited={invites.includes(item.id)}
                onClickInvite={onClickInvite}
                key={item.id}
                {...item}
              />
            ))
        )}
      </div>
      {invites.length > 0 && (
        <Button onClick={onClickSendInvites} title="Отправить приглашение" />
      )}
    </div>
  );
};
