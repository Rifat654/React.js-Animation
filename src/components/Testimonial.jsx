import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsData } from "../MocData/Data";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="blog" className=" w-full px-3 sm:px-0 md:w-[70%] h-full container mx-auto py-20">
            <div>
                <h1 className="text-center sm:text-start text-2xl md:text-4xl mb-5">Recent Blogs</h1>
            </div>

            {/* Slider component */}
            <Slider {...settings}>
                {TestimonialsData.map((data) => (
                    <div key={data.id}>
                        <div className="shadow-md shadow-slate-500 my-5 flex items-center rounded-lg justify-center mx-2">
                            <div className="p-5 flex flex-col items-center gap-4">
                                <img src={data.img} alt="" className="w-20 h-20 rounded-full " />
                                <h1 className="text-xl md:text-2xl">{data.name}</h1>
                                <p className="text-center text-sm text-slate-400">{data.text}</p>
                                <button className="px-2 py-1 shadow-md shadow-green-700  text-amber-50 rounded-md cursor-pointer hover:shadow-green-500 transition-all duration-300">{data.btn}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
