import { about } from "../MocData/Data"
// card image
import img from "../assets/card4-removebg-preview.png"
const About = () => {
    return (
        <div id="about" className="w-full h-full px-3 sm:px-0 flex flex-col items-center justify-center">
            <div><h1 className="py-10 text-3xl">About section</h1></div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full md:w-[70%] container mx-auto">
                <div className="rounded-2xl mt-0 md:mt-5 px-5 ">
                    <img src={img} alt="About section image " className="w-full h-auto " />
                </div>
                <div>
                    {/* part 1 info */}
                    <div className="first text-center lg:text-start">
                        {
                            about.map((index) => (
                                <div key={index.id1} className=" w-full  ">
                                    <h3 className=" pt-1 text-md text-green-600">{index.span}</h3>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xlfont-semibold pb-2">{index.heading}</h1>
                                    <p className="text-sm text-gray-700">{index.padding}</p>
                                </div>
                            ))
                        }
                        <div className="flex items-center justify-center lg:justify-start gap-5 pt-5">
                            <button className="px-2 py-1 shadow-md shadow-green-700 bg-green-700 text-white rounded-md cursor-pointer hover:shadow-green-500 transition-all duration-300">Show more</button>
                            <button className="px-2 py-1  border-2 hover:bg-green-700  rounded-md cursor-pointer hover:shadow-green-500 hover:text-amber-50 hover:border-amber-50 transition-all duration-300">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
