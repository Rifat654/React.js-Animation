// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// Data import
import { info, button } from "../MocData/Data";
// Image import
import image from "../assets/card1.jpg";

const Hero = () => {
    return (
        <div id="home" className="w-full lg:h-screen flex items-center justify-around px-3 sm:px-0">
            <div className="mb-0 lg:mb-16 pt-28 lg:pt-0 w-full lg:w-[70%] container mx-auto flex-col sm:flex-row flex items-center justify-center gap-10">

                {/* Brand image */}
                <div className="w-full sm:w-[50%] flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            duration: 1
                        }}

                    >
                        <motion.img
                            src={image}
                            alt="Brand"
                            className="w-[400px] h-[250px] rounded-2xl shadow-xl"
                        />
                    </motion.div>
                </div>

                {/* Brand info */}
                <div className="w-full sm:w-[50%]">
                    {info.map((item) => (
                        <div key={item.id} className="mb-5 text-center sm:text-start">
                            <h1 className="text-3xl font-semibold">{item.tittle}</h1>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                    <div className="flex items-center justify-center md:justify-start">
                        {button.map((box) => (
                            <button
                                key={box.id}
                                className="my-3 py-2 px-4 border font-medium border-gray-700 rounded-md hover:rounded-lg hover:bg-green-700 transition-all duration-300 hover:text-white cursor-pointer"
                            >
                                {box.btn}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
