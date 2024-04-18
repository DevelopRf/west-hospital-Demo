import { useContext, useEffect } from "react"
import Option from "./Option/Option"
import { DoctorContext } from "../../../context/DoctorContext"

const Select = () => {
    const { select, term, doctors, departments, setFilteredDoctors, setSelect } = useContext(DoctorContext)

    const selectArr = departments && departments.filter(item => {
        return item.name === select
    })

    useEffect(() => {
        if (!selectArr || selectArr.length === 0) {
            setFilteredDoctors(doctors)
        }
        else {
            selectArr && setFilteredDoctors(selectArr[0].doctors);
        }

    }, [doctors, select, term])

    const selectChange = (e) => {
        setSelect(e.target.value)
    }

    return (
        <select name="doctors" id="doctors" onChange={selectChange}>
            <Option />
        </select>
    )
}

export default Select