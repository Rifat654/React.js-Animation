// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion"

const Respons = ({ open }) => {
    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-20 left-0 w-full h-screen z-20 overflow-hidden md:hidden block"
                    >
                        <div className="bg-purple-500 p-5 mx-5 rounded-2xl text-right flex flex-col items-end justify-center  gap-5 text-white">
                            <ul>
                                <li><a href="home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Respons
