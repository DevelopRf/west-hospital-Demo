import { useContext, useEffect } from "react"
import Option from "./Option/Option"
import { DoctorContext } from "../../../context/DoctorContext"

const Select = () => {
    const { select, term, doctors, setSelect, departments, setFilteredDoctors } = useContext(DoctorContext)

    const selectChange = (e) => {
        setSelect(e.target.value)
    }

    const selectArr = departments && departments.filter(item => {
        return item.name === select
    })

    const bool = Boolean(selectArr)

    useEffect(() => {
        if (!selectArr) {
            setFilteredDoctors(doctors)

            console.log(bool);
        }
        else {
            console.log(bool);
            setFilteredDoctors(selectArr && selectArr[0].doctors);
            console.log("hec");
        }

    }, [term, select, doctors])

    return (
        <select name="doctors" id="doctors" onChange={selectChange}>
            <Option />
        </select>
    )
}

export default Select