import { useContext, useState, useEffect } from "react"
import styles from "./Filter.module.scss"
import Search from "./Search/Search"
import Select from "./Select/Select"
import { DoctorContext } from "../../context/DoctorContext"

const Filter = () => {

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div>
                    <Select />
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </>
    )

}

export default Filter