import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import Infinite from "./components/Infinite"
import About from "./components/About"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="bg-[#23272F] text-gray-200">
            <Navbar />
            <Hero />
            <Infinite />
            <About />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default App
