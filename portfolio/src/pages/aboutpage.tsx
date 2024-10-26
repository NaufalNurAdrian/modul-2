import About from "../component/about";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import MarquePage from "./marquepage";

function AboutPage () {
    return (
        <div>
            <Navbar />
            <About />
            <MarquePage />
            <Footer />
        </div>
    )
}
export default AboutPage