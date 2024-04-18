import styles from "../Header/Header.module.scss"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header>
                <div className={"container"}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.logo}`}><Link to="/"><img src="./src/assets/logo.svg" alt="" /></Link></div>
                        <div className={`${styles.contact}`}>
                            <p>zəng et</p>
                            <a href="">*7606</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header