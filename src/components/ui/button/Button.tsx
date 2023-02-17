// @ts-ignore
import styles from './Button.module.scss'

interface IButton {
    title: string
}

export const Button = ({title}:IButton) => {
    return (
        <button className={styles.button}>{title}</button>
    )
}
