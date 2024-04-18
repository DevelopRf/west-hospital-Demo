import { useContext } from "react"
import { DoctorContext } from "../../../context/DoctorContext"

const Search = () => {

    const { term, setTerm } = useContext(DoctorContext)

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <input type="text" placeholder="Həkim axtar" value={term} onChange={handleChange} />
    )
}

export default Search