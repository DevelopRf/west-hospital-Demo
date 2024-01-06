import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer >
            <div className={`${styles.footerContent}`}>
            <p>All rights reserved @ Jugaad Digital Agency</p>
            </div>
        </footer>
    )
}

export default Footer