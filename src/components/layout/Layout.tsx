import Footer from "../common/Footer"
import Header from "../common/Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout