import "./navbar.css"
import Navitem from "./navitem.tsx"
import logo from '../assets/logo.png'

interface IProps {
    name: string
}

function Navbar (props: IProps) {
    return (
        <div className="navbar">
            <img alt="logo" src={logo} className="logo"/>
            <Navitem />
            <p>Halo, {props.name}</p>
            
        </div>
    )
}
export default Navbar