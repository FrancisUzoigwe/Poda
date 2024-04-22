import { useDispatch, useSelector } from "react-redux"
import popular from "../../assets/Mostpopular.png"
import pope from "../../assets/popularimage.png"
import PopOut from "./PopOut"
import { popped } from "../../global/GlobalFile"
const Popular = () => {
    const dispatch = useDispatch()
    const pop = useSelector((state: any) => state.pop)
    return (
        <>
            {pop && <PopOut />}
            <div className="w-full min-h-[50vh] flex justify-center bg-[#F8F9FB] relative" >
                <img src={pope} alt="Image" className="absolute -top-[110px] max-xl:hidden w-[380px] right-10 " />
                <div style={{
                    backgroundImage: `url(${popular})`
                }} className="w-[90%] min-h-[300px] flex flex-col items-center px-3 rounded-lg border my-10 ">

                    <div className="mt-10 w-full flex justify-center">
                        <div className="w-[90%] pb-5">
                            <div className="text-[40px] font-[Blud] leading-[47px] w-[650px] max-lg:w-full max-md:text-[30px] max-md:leading-[36px] capitalize"> Signup to start enjoying your favourite contents.</div>
                            <div className="my-4 text-gray-600">Explore our wide range of categories, share what you know & listen anytime, anywhere.</div>
                            <div>
                                <button className="px-4 py-3 rounded-lg bg-black text-white hover:bg-[#FF9A00]  transition-all duration-300 " onClick={() => {
                                    dispatch(popped())
                                }}>Join Waitlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popular