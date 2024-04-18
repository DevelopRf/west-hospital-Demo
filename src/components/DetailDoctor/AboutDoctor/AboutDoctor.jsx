import styles from "../AboutDoctor/AboutDoctor.module.scss"
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/inter"
import "@fontsource/inter/400.css"
const AboutDoctor = ({ Data }) => {

    const { name, profession, about, image, info1, info2, info3 } = Data
    return (

        <section className={styles.detailDoctor}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
                        <div className={styles.detailCard}>
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
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 mt-3">
                        <div className={styles.detailCard}>
                            <h2>{name}</h2>
                            <h3>{profession}</h3>
                            <div dangerouslySetInnerHTML={

                                {
                                    __html: about
                                }

                            }>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDoctor