// @ts-ignore
import styles from "./UserItem.module.scss";
import { IUserItemData } from "../../date/date";

export const UserItem = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}: IUserItemData) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.wrapperInfo}>
          <div className={styles.title}>
            {first_name} {last_name}
          </div>
          <div className={styles.email}>{email}</div>
        </div>
      </div>
      <img
        src={`icons/${isInvited ? "minus" : "plus"}.svg`}
        alt="add"
        className={styles.icon}
        onClick={() => (onClickInvite ? onClickInvite(id) : undefined)}
      />
    </div>
  );
};
