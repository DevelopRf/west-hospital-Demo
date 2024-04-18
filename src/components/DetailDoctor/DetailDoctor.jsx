import AboutDoctor from "./AboutDoctor/AboutDoctor"
import DepartmentInfo from "./DepartmentInfo/DepartmentInfo"

const DetailDoctor = ({ data }) => {

    return (
        <>
            <AboutDoctor Data={data} />
            <DepartmentInfo Data={data} />
        </>
    )
}

export default DetailDoctor