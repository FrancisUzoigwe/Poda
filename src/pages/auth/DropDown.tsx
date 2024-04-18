
const DropDown = () => {
    return (
        <div className="w-[200px] min-h-[100px] bg-white shadow-xl rounded-lg flex flex-col">
            <div className="w-full flex flex-col items-end">
                <div className="text-[20px] pr-4 my-1 px-4 py-1 rounded-md hover:bg-[#FF9A00] mr-2 hover:text-white transition-all duration-300 hover:cursor-pointer">Home</div>
                <div className="text-[20px] pr-4 my-1 px-4 py-1 rounded-md hover:bg-[#FF9A00] mr-2 hover:text-white transition-all duration-300 hover:cursor-pointer">About Us</div>
                <div className="text-[20px] pr-4 my-1 px-4 py-1 rounded-md hover:bg-[#FF9A00] mr-2 hover:text-white transition-all duration-300 hover:cursor-pointer">Features</div>
                <div className="text-[20px] pr-4 my-1 px-4 py-1 rounded-md hover:bg-[#FF9A00] mr-2 hover:text-white transition-all duration-300 hover:cursor-pointer">Contact Us</div>
                <div className="my-1" />
            </div>
        </div>
    )
}

export default DropDown