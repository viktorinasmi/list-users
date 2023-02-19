// @ts-ignore
import styles from './Input.module.scss'

export const Input = () => {
    return(
        <div className={styles.container}>
            <img className={styles.icon} src='icons/search.png' alt='search'/>
            <input className={styles.input} type="text" name='search-contact' placeholder='Найти пользователя ...'/>
        </div>
    )
}
