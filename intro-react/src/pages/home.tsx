import Button from "../components/button"
import Gambar from "../assets/iphone3.png"

function HomePage () {
    const str: string = "Hello!"
    return (
        <div className="home">
            <div className="gambar">
                <img src={Gambar} alt="Gambar"  className="gambar"/>
            </div>

            <div className="deskripsi">
                <h1 className="judul">{str}</h1>
                <p className="isi">I'm Naufal Nur Adrian, a web developer</p>
                <Button />
            </div>
        </div>
    )
}
export default HomePage