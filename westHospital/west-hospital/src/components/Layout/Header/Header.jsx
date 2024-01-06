import styles from "../Header/Header.module.scss"
const Header = () => {
    return (
        <>
            <header>
                <div className={"container"}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.logo}`}><a href=""><img src="./src/assets/logo.svg" alt="" /></a></div>
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