import { Input } from "../ui/input";
import { Button } from "../ui/button";
// @ts-ignore
import styles from "./Users.module.scss";
import { UserItem } from "./userItem";
import { Skeleton } from "../skeleton";
import { IUserItemData } from "../date/date";

interface IUsers {
  items: IUserItemData[];
  isLoading?: boolean;
}

export const Users = ({ items, isLoading }: IUsers) => {
  return (
    <div className={styles.container}>
      <Input />
      <div className={styles.wrapperUsers}>
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          items.map((item) => <UserItem key={item.id} {...item} />)
        )}
      </div>
      <div>
        <Button title="Отправить приглашение" />
      </div>
    </div>
  );
};
