import { useContext, useEffect } from "react"
import Option from "./Option/Option"
import { DoctorContext } from "../../../context/DoctorContext"

const Select = () => {
    const { select, term, doctors, departments, setFilteredDoctors, setSelect } = useContext(DoctorContext)

    const selectArr = departments && departments.filter(item => {
        return item.name === select
    })

    useEffect(() => {
        console.log(selectArr);
        console.log(doctors)
        console.log(departments);
        if (!selectArr || selectArr.length === 0) {
            console.log("11");
            setFilteredDoctors(doctors)
        }
        else {
            console.log("22");
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