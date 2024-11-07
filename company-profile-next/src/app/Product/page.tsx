import Crewneck from "@/components/Crewneck";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Product() {
    return(
        <div className="grid">
            <div>
                <Navbar />
                <Crewneck />
                <Footer />
            </div>
        </div>
    )
}