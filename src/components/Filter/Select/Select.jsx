import { useContext, useEffect } from "react"
import { DoctorContext } from "../../../context/DoctorContext"
import styles from "./Select.module.scss";

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
        <div className={styles.departments}>
            <select name="doctors" id="doctors" onChange={selectChange}>
                <option value="all-doctors">Bütün həkimlər</option>
                {departments && departments.map(item => <option key={item.id} value={item.name}>{item.name}</option>
                )}
            </select>
        </div>
    )
}

export default Select