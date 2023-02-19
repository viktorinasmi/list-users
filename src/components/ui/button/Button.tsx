// @ts-ignore
import styles from './Button.module.scss'

interface IButton {
    title: string
    onClick?: () => void
}

export const Button = ({title, onClick}:IButton) => {
    return (
        <button className={styles.button} onClick={onClick}>{title}</button>
    )
}
