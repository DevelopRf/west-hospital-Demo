import styles from "../DetailDoctor/DetailDoctor.module.scss"
import AboutDoctor from "./AboutDoctor/AboutDoctor"
import SideLeft from "./SideLeft/SideLeft"

const DetailDoctor = ({ data }) => {

    return (

        <section className={styles.detailDoctor}>
            <div className="container">
                <div className={styles.wrapper}>
                    <SideLeft Data={data} />
                    <AboutDoctor Data={data} />
                </div>
            </div>
        </section>
    )
}

export default DetailDoctor