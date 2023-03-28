import { NavLink } from "react-router-dom";
import '../styles/Header.css'

function Header(){
    return(
        <nav className="navbar page">
           <div className="navbar-header">
            <NavLink to={'/'}><h1 className="text-light">Ivan Chavaren</h1></NavLink>


           </div>
            <div className="navbar-menu">
                <NavLink to={'/services'} className={({isActive}) => (isActive ? "navlink-active" : "navlink")}>Services</NavLink>
                <NavLink to={'/a-propos'} className={({isActive}) => (isActive ? "navlink-active" : "navlink")}>A propos</NavLink>
            </div>
        </nav>
    )
}

export default Header;