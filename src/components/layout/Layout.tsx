import DropDown from "../../pages/auth/DropDown"
import Footer from "../common/Footer"
import Header from "../common/Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <Header />
            <div >
                <Outlet />
                <DropDown />
            </div>
            <Footer />
        </div>
    )
}

export default Layout