import styles from "./sideLeft.module.scss"

const SideLeft = ({ Data }) => {
    const { image, info1, info2, info3 } = Data
    return (
        <>
            <div className={styles.sideLeft}>
                <div className={styles.image}>
                    <img src={image} alt="" />

                </div>

                <div className={styles.education}>
                    {
                        info1 && <h2>Təhsil keçmişi</h2>
                    }
                    <p>{info1}</p>
                    <p>{info2}</p>
                    <p>{info3}</p>
                </div>
            </div>

        </>
    )
}

export default SideLeft