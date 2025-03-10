import Marquee from "react-fast-marquee"
// import images
import bank1 from "../assets/bank1.jpg"
import bank2 from "../assets/bank2.jpg"
import bank3 from "../assets/bank3.jpg"
import bank4 from "../assets/bank4.jpg"
const Infinite = () => {
    return (
        <div className="mb-20 w-full md:w-[920px] h-full container mx-auto  pt-20 md:pt-0  overflow-hidden">
            <div><h1 className="py-5 text-3xl px-3 sm:px-0">Popular Banks</h1></div>
            <Marquee play pauseOnHover={true} speed={100} className="w-full">
                <img src={bank1} className="h-32 mx-5" />
                <img src={bank2} className="h-32 mx-5" />
                <img src={bank3} className="h-32 mx-5" />
                <img src={bank4} className="h-32 mx-5" />
            </Marquee>
        </div>
    )
}

export default Infinite
