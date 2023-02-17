// @ts-ignore
import styles from './Success.module.scss'
import {Button} from "../ui/button/Button";

export const Success = () => {
    return (
        <div className={styles.container}>
            <img src='icons/done.png' alt='done' width={96} height={96}/>
            <div className={styles.title}>Успешно!</div>
            <div className={styles.description}>Всем пользователям отправлено приглашение.</div>
            <div className={styles.wrapperButton}>
                <Button title='Назад'/>
            </div>
        </div>
    )
}
