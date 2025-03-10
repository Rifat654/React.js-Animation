import { useState } from "react";
import { NavbarMenu } from "../../MocData/Data"
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import Respons from "./Respons";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className="flex  items-center px-4">
                <div className="container mx-auto p-4 flex items-center justify-between">
                    {/* logo section */}
                    <div className="text-xl font-medium">
                        <h1>American-<span className="text-orange-700">Express</span> </h1>
                    </div>
                    {/* Menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-7">
                            {
                                NavbarMenu.map((item,) => {
                                    return <li key={item.id}>
                                        <a href={item.link}> {item.title}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    {/* icon section */}
                    <div className=" hover:border-1  rounded-full w-5 h-5 flex items-center justify-center">
                        <button className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:text-sm hover:text-green-700"><BiSolidMessageRoundedDetail /></button>
                    </div>
                </div>
                {/* mobile menu side bar */}
                <div className="text-xl font-bold md:hidden cursor-pointer" onClick={() => {
                    setOpen(!open)
                }}>
                    {open ? <IoClose /> : <RiMenu3Line />}

                </div>
            </nav>
            {/* responsive mobile menu */}
            <Respons open={open} />
        </div>
    )
}

export default Navbar
