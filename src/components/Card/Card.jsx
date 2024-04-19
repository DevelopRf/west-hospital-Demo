

import styles from "../Card/Card.module.scss"
import "@fontsource/poppins"
import "@fontsource/poppins/500.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { DoctorContext } from "../../context/DoctorContext"
import { useContext } from "react"

function Card() {

    const { filteredDoctors, term } = useContext(DoctorContext)

    const searchArr = filteredDoctors && filteredDoctors.filter(item => {
        return item.name.toLowerCase().includes(term.toLowerCase())
    })

    return (
        searchArr ? searchArr.map((item, index) => {

            const { id, name, profession, about, image } = item
            return (
                <div key={id} className="col-lg-6 col-md-12 mt-3 d-flex flex-column">
                    <div className={`${styles.card} ${index % 2 !== 0 ? styles.active : ""}`} data-aos="fade-right" data-aos-duration="500">
                        <div className={styles.innerCard}>
                            <div className={styles.image}>
                                <Link to={id}>
                                    <img src={image} alt="" />
                                </Link>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.content}>
                                    <h4>{name}</h4>
                                    <h5>{profession}</h5>
                                    <div className={styles.text}>{about}</div>
                                </div>
                                <div className={styles.btn}>
                                    <Link to={id}>Ətraflı
                                        <FontAwesomeIcon icon={faChevronRight} className={styles.iconRight} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }) : <h3>Həkim tapılmadı</h3>
    )
}

export default Card