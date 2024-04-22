import { Link } from "react-scroll"
import { spinUpServer } from "../../apis/emailApis"
import Discover from "./Discover"
import Hero from "./Hero"
import Popular from "./Popular"
import Whyus from "./Whyus"
import { useEffect, useState } from "react"
import { TiArrowSortedDown } from "react-icons/ti"

const Arrow = () => {

    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = () => {
        if (window.scrollY >= 10) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll)
    return <>
        {
            scroll ? <Link to="header" smooth={true} duration={2000}>
                <div className="fixed hover:cursor-pointer z-[400] animate-bounce bottom-14 right-10 w-[50px] h-[50px] rounded-lg flex items-center justify-center  bg-[#FF9A00] text-white ">
                    <TiArrowSortedDown className="text-2xl rotate-180" />
                </div>
            </Link> : <Link to="contact" smooth={true} duration={2000}>
                <div className="fixed hover:cursor-pointer z-[400] animate-bounce bottom-14 right-10 w-[50px] h-[50px] rounded-lg flex items-center justify-center  bg-[#FF9A00] text-white " >
                    <TiArrowSortedDown className="text-2xl " />
                </div>
            </Link>
        }
    </>
}

const Landing = () => {

    useEffect(() => {
        spinUpServer()
    }, [])
    return (
        <div>
            <Arrow />
            <Hero />
            <Whyus />
            <Discover />
            <Popular />
        </div>
    )
}

export default Landing