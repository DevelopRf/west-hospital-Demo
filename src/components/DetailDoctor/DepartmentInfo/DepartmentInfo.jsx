import { Link } from "react-router-dom"
import styles from "./DepartmentInfo.module.scss"
import "@fontsource/inter"
import "@fontsource/inter/400.css"

const DepartmentInfo = ({ Data }) => {

    const { image, name, text } = Data.departments.length > 0 && Data.departments[0]

    return (
        < section className={styles.departmentInfo} >

            <div className="container">
                <div className="row space-outer">
                    <div className="col-lg-8 mt-3">
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
                            <Link to="#">Şöbəyə keçid al</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className={styles.image}>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </ section>
    )
}

export default DepartmentInfo