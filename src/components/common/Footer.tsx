import headerLogo from "../../assets/header-logo.svg";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-center lg:text-left w-[95%]">
                <div className="mx-auto">
                    <img src={headerLogo} alt="logo" className="hover:cursor-pointer"  />
                </div>
                <hr className="mt-4 mb-4" />

                <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mb-3">
                    <p className="lg:w-3/5 font-poppins text-[#63706d] text-lg leading-8 mt-3 lg:mt-0">
                        All rights reserved © PodA 2024
                    </p>
                    <div className="flex justify-center lg:justify-start gap-2 mt-3 lg:mt-0">
                        <a
                            href="https://twitter.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black p-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
                        >
                            <div className="text-white"><FaXTwitter className="text-2xl" /></div>
                        </a>
                        <a
                            href="https://facebook.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black p-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
                        >
                            <div className="text-white"><FaFacebook className="text-2xl" /></div>
                        </a>
                        <a
                            href="https://instagram.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black p-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
                        >
                            <div className="text-white"><FaInstagram className="text-2xl" /></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;