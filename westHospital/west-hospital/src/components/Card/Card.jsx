

import styles from "../Card/Card.module.scss"
import "@fontsource/poppins"
import "@fontsource/poppins/500.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DoctorContext } from "../../context/DoctorContext"


function Card() {

    const { filteredDoctors, term} = useContext(DoctorContext)

const searchArr = filteredDoctors && filteredDoctors.filter(item =>
    {
        return item.name.toLowerCase().includes(term.toLowerCase())
    })
    
    return (
        <>
            {
                searchArr && searchArr.map(item => {
                    
                    return (
                        <div key={item.id} className={`${styles.card}`} data-aos="fade-right" data-aos-duration="500">
                            <div className={`${styles.innerCard}`}>
                                <div className={`${styles.image}`}>
                                    <Link to={`${item.id}`}>
                                        <img src={item.image} alt="" />
                                    </Link>
                                </div>
                                <div className={`${styles.info}`}>
                                    <h3 className={`${styles.title}`}>{item.name}</h3>
                                    <h4 className={`${styles.profession}`}>{item.profession}</h4>
                                    <div className={`${styles.text}`}>{item.about}</div>
                                    <div className={`${styles.btn}`}>
                                        <Link to={`${item.id}`}>Ətraflı
                                            <FontAwesomeIcon icon={faChevronRight} className={`${styles.iconRight}`} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card