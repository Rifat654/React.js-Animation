import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="w-full h-auto bg-black text-white rounded-t-3xl">
            <div className="w-full  md:w-[70%] container mx-auto py-5  flex flex-col items-center justify-around md:items-start md:flex-row gap-5 text-center md:text-start">
                <div className=" w-[300px] rounded-md shadow-slate-400 shadow-sm p-3 ">
                    <h1 className="text-xl font-light">About American-Express Card</h1>
                    <p className="text-[10px] text-start pt-4 text-gray-400">Master card are sit amet consectetur adipisicing elit. Maiores quia omnis accusantium! Labore, aspernatur. Itaque, blanditiis quam cum odio dolores fuga repudiandae minima laborum suscipit!</p>
                    <div className="flex items-center gap-4 pt-4">
                        <FaFacebookSquare className="text-blue-600 bg-fuchsia-50" />
                        <FaInstagramSquare className="text-pink-600 bg-white" />
                        <FaLinkedin className="text-blue-600 bg-fuchsia-50" />

                    </div>
                </div>
                <div className="">
                    <h1 className="text-xl">Quick response</h1>
                    <div className="text-slate-400 text-sm">
                        <p>Term</p>
                        <p>Contain</p>
                        <p>Service</p>
                        <p>Looks</p>
                    </div>
                </div>
                <div className="w-[20] flex flex-col  items-center md:items-start justify-center md:justify-start">
                    <h2>Download App</h2>
                    <p className="text-[10px] text-slate-400">Download our app and use the services sit, amet consectetur <br /> adipisicing elit. Blanditiis, veniam.</p>
                    <div className="flex items-center gap-3 py-3">
                        <IoLogoGooglePlaystore />
                        <FaAppStoreIos />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
