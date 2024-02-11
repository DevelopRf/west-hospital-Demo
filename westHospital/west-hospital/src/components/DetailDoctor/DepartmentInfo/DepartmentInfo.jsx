import styles from "../DepartmentInfo/DepartmentInfo.module.scss"
import "@fontsource/inter"
import "@fontsource/inter/400.css"

const DepartmentInfo = ({ Data }) => {

    const { image, name, text } = Data.departments[0]
    return (
        <>
            <section className={styles.departmentInfo}>

                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                <h2>{name}</h2>
                            </div>
                            <div className={styles.info} dangerouslySetInnerHTML={
                                {
                                    __html: text
                                }
                            }>

                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DepartmentInfo