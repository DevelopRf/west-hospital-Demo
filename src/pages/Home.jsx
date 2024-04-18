import Card from "../components/Card/Card"
import styles from "../pages/Home.module.scss"
import Filter from "../components/Filter/Filter"
import { DoctorContext } from "../context/DoctorContext"
import { useEffect } from "react"
import AOS from "aos"
import { useContext } from "react"


const Home = () => {

    const { filteredDoctors } = useContext(DoctorContext)
    useEffect(() => {
        AOS.init()
    })

    return (
        <section className={`${styles.doctors}`}>
            <div className="container">
                <Filter />
                <div className="row">
                    {filteredDoctors ? <Card /> : <h2>Həkim tapılmadı</h2>}
                </div>
            </div>
        </section>
    )
}

export default Home