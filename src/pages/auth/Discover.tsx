import Cards from "./Cards"
import category1 from "../../assets/category1.png"
import category2 from "../../assets/category2.png"
import category3 from "../../assets/category3.png"
import { useDispatch, useSelector } from "react-redux"
import PopOut from "./PopOut"
import { popped } from "../../global/GlobalFile"
const Discover = () => {
    const dispatch = useDispatch()
    const pop = useSelector((state: any) => state.pop)
    return (
        <>
            {pop && <PopOut />}
            <div className="w-full min-h-[100vh] flex justify-center bg-[#F8F9FB]" id="features">
                <div className="w-[95%] flex flex-col items-center mt-14">
                    <div className="font-[Blud] text-[40px] text-center my-3 max-md:text-[30px] max-md:leading-[36px] ">Discover Your Favorite
                        Podcast and Audiobook Categories</div>
                    <div className="text-gray-600">Explore our wide range of categories, share what you know & listen anytime, anywhere.</div>
                    <div className="my-5" />
                    <div className="w-full grid grid-cols-3 gap-4 py-4 max-lg:grid-cols-2 max-md:grid-cols-1 ">
                        <Cards text="Lifestyle" content="Enjoy seamless podcast with our lifestyle audio story." image={category1} />
                        <Cards text="Health" content="Enjoy seamless podcast with our health audio story." image={category2} />
                        <Cards text="Business & Finance" content="Enjoy seamless podcast with our business audio story." image={category3} style="" />
                    </div>

                    <div className="my-10">
                        <button className="px-4 py-3 rounded-lg bg-black text-white hover:bg-[#FF9A00]  transition-all duration-300 " onClick={() => dispatch(popped())}>All Categories</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover