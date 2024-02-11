import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailDoctor from "../components/DetailDoctor/DetailDoctor";
const Detail = () => {

    const { doctorId } = useParams()
    const [detail, setDetail] = useState(null)
    const API = `http://localhost:3000/doctor-detail/${doctorId}`

    async function getData() {
        try {
            const res = await fetch(API)
            if (!res.ok) {
                throw new Error("The network response was not ok.")
            }
            const data = await res.json()
            setDetail(data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (!detail || detail.length === 0) {
        return <h3>Məlumat tapılmadı</h3>
    }

    return (
        <>
        {
            <DetailDoctor data={detail} />
        }
        </>
    )
}

export default Detail 