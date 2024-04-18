import { useContext, useRef } from "react"
import { DoctorContext } from "../../../context/DoctorContext"
import { Search } from "react-bootstrap-icons"
import styles from "./search.module.scss"

const SearchDoctor = () => {
    const { term, setTerm } = useContext(DoctorContext)
    const input = useRef()

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div className={styles.searchDoctor}>
            <input type="text" ref={input} placeholder="Həkim axtar" value={term} onChange={handleChange} />
            <Search onClick={() => input.current.focus()} />
        </div>
    )
}

export default SearchDoctor