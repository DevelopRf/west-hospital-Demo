import Cards from '../components/Cards/Cards'
import styles from "../pages/Home.module.scss"
import Filter from "../components/Filter/Filter"

const Home = () => {
    
    return (
        <section className={`${styles.doctors}`}>
            <div className="container">
                <Filter />
                <Cards />
            </div>
        </section>
    )
}

export default Home