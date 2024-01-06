import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout