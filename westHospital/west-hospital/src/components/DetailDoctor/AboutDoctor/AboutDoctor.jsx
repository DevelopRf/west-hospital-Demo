import styles from "../AboutDoctor/AboutDoctor.module.scss"
import "@fontsource/inter"
import "@fontsource/inter/400.css"
const AboutDoctor = ({ Data }) => {

    const { name, profession, about } = Data
    return (

        <>
            <div className={styles.info}>
                <h2>{name}</h2>
                <h3>{profession}</h3>
                <div dangerouslySetInnerHTML={

                    {
                        __html: about
                    }

                }>
                </div>
            </div>
        </>
    )
}

export default AboutDoctor