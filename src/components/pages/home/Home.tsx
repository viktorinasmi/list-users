import {Success} from "../../success";
// @ts-ignore
import styles from './Home.module.scss'
import {Users} from "../../users";

export const Home = () => {
    return (
        <div className={styles.container}>
            <Users/>
            {/*<Success/>*/}
        </div>
    )
}
