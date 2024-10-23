import "./navbar.css"
import Navitem from "./navitem.tsx"
import logo from '../assets/logo.png'


function Navbar () {
    return (
        <div className="navbar">
            <img alt="logo" src={logo} className="logo"/>
            <Navitem />
            <p></p>
            
        </div>
    )
}
export default Navbar