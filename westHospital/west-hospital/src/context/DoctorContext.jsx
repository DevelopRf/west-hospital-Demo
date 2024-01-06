import { createContext, useEffect, useState } from "react";

export const DoctorContext = createContext()

export const DoctorProvider = ({ children }) => {

    const [doctors, setDoctors] = useState(null)
    const [departments, setDepartments] = useState(null)
    const [filteredDoctors, setFilteredDoctors] = useState(null)
    const [term, setTerm] = useState("")
    const [select, setSelect] = useState("")


    useEffect(() => {
        const getDoctors = async () => {
            const res = await fetch("http://localhost:3000/doctors")
            const data = await res.json()
            setDoctors(data)
        }
        getDoctors()

        const getDepartmnents = async () => {
            const res = await fetch("http://localhost:3000/departments")
            const data = await res.json()
            setDepartments(data)
        }
        getDepartmnents()
    }, [])

    return (
        <DoctorContext.Provider value={{ term, setTerm, select, setSelect, doctors, departments, filteredDoctors, setFilteredDoctors }}>
            {children}
        </DoctorContext.Provider>
    )
}