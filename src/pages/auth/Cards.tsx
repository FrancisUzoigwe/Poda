import React from "react";
import line from "../../assets/lines.png"

interface Card {
    image?: any;
    text?: any;
    content?: any;
    style?: string;
}
const Cards: React.FC<Card> = ({ image, text, content, style }) => {
    return (
        <>
            <div className={`min-h-[450px] rounded-2xl flex flex-col items-center  border bg-white shadow-lg ${style}`}>
                <div className="w-[90%] h-[250px] border mt-5">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-[90%] flex items-center justify-center h-[50px] mt-2">
                    <img src={line} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-[90%] font-[Blud] flex text-[20px] my-1">
                    {text}
                </div>
                <div className="w-[90%] text-gray-600 ">{content}</div>
            </div>
        </>
    )
}

export default Cards