import {Input} from "../ui/input";
import {Button} from "../ui/button";
// @ts-ignore
import styles from './Users.module.scss'

export const Users = () => {
    return  (
        <div className={styles.container}>
            <Input/>
            <div>user</div>
            <div>
            <Button title='Отправить приглашение'/>
            </div>
        </div>
    )
}
