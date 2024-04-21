import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-scroll"
import { changedToggled } from "../../global/GlobalFile"
const DropDown = () => {

    const toggle = useSelector((state: any) => state.toggle)
    const motionVariant = {
        open: {
            width: 250,
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        },
        close: {
            width: 0,
            opacity: 1,
            x: 100,
            transition: {
                duration: 0.5
            }
        }
    }

    const dispatch = useDispatch()

    return (
        <>
            <motion.div variants={motionVariant} initial={false} animate={toggle ? "open" : "close"} className={`${toggle ? "w-[250px] shadow-lg " : "w-[0px]  "} bg-white  h-screen flex-col items-center fixed top-0 right-0 max-md:flex hidden`}>
                <div className="my-12" />
                <Link to="header" duration={1000} smooth={true}>
                    <div className="uppercase px-5 py-2 rounded-md my-1 font-[Blud] hover:bg-[#FF9A00] transition-all duration-300 hover:text-white hover:cursor-pointer" onClick={() => {
                        dispatch(changedToggled())
                    }}>Home</div></Link>
                <Link to="about" smooth={true} duration={1000}>
                    <div className="uppercase px-5 py-2 rounded-md my-1 font-[Blud] hover:bg-[#FF9A00] transition-all duration-300 hover:text-white hover:cursor-pointer" onClick={() => {
                        dispatch(changedToggled())
                    }} >About Us</div>
                </Link>
                <Link to="features" smooth={true} duration={1000}>
                    <div className="uppercase px-5 py-2 rounded-md my-1 font-[Blud] hover:bg-[#FF9A00] transition-all duration-300 hover:text-white hover:cursor-pointer" onClick={() => {
                        dispatch(changedToggled())
                    }}>Features</div>
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                    <div className="uppercase px-5 py-2 rounded-md my-1 font-[Blud] hover:bg-[#FF9A00] transition-all duration-300 hover:text-white hover:cursor-pointer" onClick={() => {
                        dispatch(changedToggled())
                    }}>Contact Us</div>
                </Link>
            </motion.div>
        </>
    )
}


export default DropDown