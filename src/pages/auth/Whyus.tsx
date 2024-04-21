import { useDispatch, useSelector } from "react-redux"
import aboutImage from "../../assets/aboutImage.png"
import check from "../../assets/checkbox.svg"
import PopOut from "./PopOut"
import { popped } from "../../global/GlobalFile"
const Whyus = () => {
    const dispatch = useDispatch()
    const pop = useSelector((state: any) => state.pop)
    return (
        <>
            {pop && <PopOut />}
            <div className="w-full min-h-[100vh] flex justify-center bg-[#F8F9FB]" id="about">
                <div className="w-[95%] flex items-center  max-lg:flex-col mt-3">
                    <img className="w-[500px] border h-[500px] object-cover rounded-lg max-lg:w-[95%]" alt="Image" src={aboutImage} />
                    <div className=" w-[600px] max-lg:w-full ml-16 max-md:ml-1">
                        <div className="font-[Blud] text-[40px] my-3 max-md:text-[30px] max-md:leading-[36px] ">Why are we unique.</div>
                        <div className="text-gray-600 max-md:w-[95%]">Explore a wide range of categories and stay up to date with the latest news and trends in the podcast world.</div>
                        <div className="my-3">
                            <p className="my-4">
                                <img src={check} alt="" className="inline-block mr-2 " />
                                With our built-in microphone, record and edit & publish right inside the app.
                            </p>
                            <p className="my-4">
                                <img src={check} alt="" className="inline-block mr-2 " />
                                Increase your reach with our wide sharing options.
                            </p>
                            <p className="my-4">
                                <img src={check} alt="" className="inline-block mr-2 " />
                                Let other people know about your thoughts.
                            </p>
                            <p className="my-4">
                                <img src={check} alt="" className="inline-block mr-2 " />
                                Connect with your community members
                            </p>
                        </div>
                        <button className="px-4 py-3 my-3 rounded-lg bg-black text-white hover:bg-[#FF9A00]  transition-all duration-300 " onClick={() => {
                            dispatch(popped())
                        }}>Join Waitlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyus