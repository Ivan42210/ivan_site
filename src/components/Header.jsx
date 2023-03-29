import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.css'



function Header(){

    const [isHidden, setHidden] = useState('hidden')

const handleClick = () => isHidden === 'hidden' ? setHidden('show') : setHidden('hidden')

    

    return(
        <nav className="navbar page">
           <div className="navbar-header">
            <NavLink to={'/'}><h1 className="text-light">Ivan Chavaren</h1></NavLink>

            <div className={`navbar-toggle-${isHidden}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
           </div>
            <div className={`navbar-menu-${isHidden}`}>
                <NavLink to={'/services'} className={({isActive}) => (isActive ? "navlink-active" : "navlink")}>Services</NavLink>
                <NavLink to={'/a-propos'} className={({isActive}) => (isActive ? "navlink-active" : "navlink")}>A propos</NavLink>
            </div>
        </nav>
    )
}

export default Header;