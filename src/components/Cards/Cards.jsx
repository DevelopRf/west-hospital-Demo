import React, { useEffect } from "react"
import Card from "../Card/Card"
import styles from "../Cards/cards.module.scss"
import AOS from "aos"


function Cards() {
    useEffect(() => {
        AOS.init()
    })

    return (
        <>
            <div className={`${styles.cards}`}>
                <Card />
            </div>
        </>
    )
}
export default Cards