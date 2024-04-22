import { useDispatch, useSelector } from "react-redux"
import hero from "../../assets/hero-banner.png"
import PopOut from "./PopOut"
import { popped } from "../../global/GlobalFile"
const Hero = () => {
    const dispatch = useDispatch()
    const pop = useSelector((state: any) => state.pop)
    return (
        <>
            <div className="w-full flex items-center justify-center bg-[#F8F9FB]">
                <div className="capitalize w-[95%] flex items-center text-center justify-center text-[25px] py-3 font-[Zah]">You deserve to be heard. You deserve to know.</div>
            </div>
            {pop && <PopOut />}
            <div className="w-full bg-[#F8F9FB] min-h-[90vh] flex justify-center">
                <div className="w-[95%] flex justify-between items-center max-lg:flex-col">
                    <div className="w-[500px] max-lg:w-full ">
                        <div className="font-[Blud] text-[55px] max-md:text-[30px] max-md:leading-[36px] max-lg:leading-[55px] max-lg:mt-5 w-[500px] leading-[65px] mb-4 max-lg:w-full max-md:text-center">Podcasting and Audio Books Simplified For Everyone.</div>
                        <div className="w-[500px] max-lg:w-full max-md:text-center text-gray-600 my-4">Explore our wide range of categories, share what you know & listen anytime, anywhere.</div>

                        <button className="px-4 mt-4 py-3 rounded-lg bg-black text-white hover:bg-[#FF9A00]  transition-all duration-300 max-md:hidden" onClick={() => dispatch(popped())}>Join Waitlist</button>
                    </div>
                    <img src={hero} alt="Image" className="auto max-lg:w-full h-[500px] object-cover " />
                </div>
            </div>
        </>
    )
}

export default Hero