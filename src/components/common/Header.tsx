import { FaHeadphones } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-scroll"
import PopOut from "../../pages/auth/PopOut"
import { changedToggled, popped, toggled } from "../../global/GlobalFile"
import logo from "../../assets/header-logo.svg"
import { IoMdClose } from "react-icons/io"
const Header = () => {

    const dispatch = useDispatch()
    const pop = useSelector((state: any) => state.pop)
    const toggle = useSelector((state: any) => state.toggle)


    return (
        <>
            {pop && <PopOut />}
            <div className="w-full bg-[#F8F9FB]  h-[70px] flex items-center justify-center z-[400]" id="header">
                <div className="w-full shadow-lg fixed h-[70px] flex items-center justify-center bg-[#F8F9FB] z-[400]">
                    <div className="w-[95%] h-[60px] flex items-center justify-between bg-[#F8F9FB]  ">
                        <a href="/">
                            <img src={logo} className="font-[Blud] w-[100px] h-[30px]" />
                        </a>
                        <div className="flex items-center max-md:hidden">
                            <Link to="header" duration={1000} smooth={true}>
                                <nav className="mx-7 hover:cursor-pointer hover:text-[#FF9A00] transition-all duration-300">Home</nav>
                            </Link>
                            <Link to="about" duration={1000} smooth={true}>
                                <nav className="mx-7 hover:cursor-pointer hover:text-[#FF9A00] transition-all duration-30">About Us</nav>
                            </Link>
                            <Link to="features" duration={1000} smooth={true}>
                                <nav className="mx-7 hover:cursor-pointer hover:text-[#FF9A00] transition-all duration-30">Features</nav>
                            </Link>
                            <Link to="contact" duration={1000} smooth={true}>
                                <nav className="mx-7 hover:cursor-pointer hover:text-[#FF9A00] transition-all duration-30">Contact Us</nav>
                            </Link>
                        </div>
                        <div className="flex items-center">   <button className="px-4 py-3 rounded-lg bg-black text-white hover:bg-[#FF9A00]  transition-all duration-300 " onClick={() => {
                            dispatch(popped())
                        }} >Join Waitlist</button>
                            <div className="hidden max-md:block ml-4 relative">{!toggle ? <FaHeadphones className="text-2xl hover:cursor-pointer  hover:text-[#FF9A00] transition-all duration-30" onClick={() => {
                                dispatch(toggled())
                            }} /> : <IoMdClose className="text-2xl hover:cursor-pointer hover:text-[#FF9A00]" onClick={() => {
                                dispatch(changedToggled())
                            }} />
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header