import { Link } from "react-router-dom";
import headerLogo from "../../assets/header-logo.svg";
import { FaXTwitter, FaFacebook } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center" id="contact">
            <div className="text-center lg:text-left w-[95%]">
                <div className="mx-auto">
                    <img src={headerLogo} alt="logo" className="hover:cursor-pointer" />
                </div>
                <hr className="mt-4 mb-4" />

                <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mb-3">
                    <p className="lg:w-3/5 font-poppins text-[#63706d] text-lg leading-8 mt-3 lg:mt-0">
                        All rights reserved © PodA 2024
                    </p>
                    <div className="flex justify-center lg:justify-start gap-2 mt-3 lg:mt-0">

                        <Link to="https://www.facebook.com/profile.php?id=61555114434395&mibextid=ZbWKwL">
                            <div className="mr-2"> <FaXTwitter className="text-2xl" /></div>
                        </Link>
                        <Link to="https://x.com/Pod_Audio?s=09">
                            <div className="ml-2"> <FaFacebook className="text-2xl" /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;