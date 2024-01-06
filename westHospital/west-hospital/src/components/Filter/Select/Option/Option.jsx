import { useContext } from "react"
import { DoctorContext } from "../../../../context/DoctorContext"

const Option = () => {

    const { departments } = useContext(DoctorContext)
    return (
        <>
            <option value="all-doctors">Bütün həkimlər</option>
            {departments && departments.map(item => <option key={item.id} value={item.name}>{item.name}</option>
            )}
        </>
    )
}
export default Option