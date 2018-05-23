import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

import pawIcon from './assets/paw.png';
import houseIcon from './assets/house.png';

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink exact to="/" activeClassName="active" className="Navbar-item">
                <img src={pawIcon} className="Navbar-item__icon" alt="Generator" />
            </NavLink>
            <NavLink to="/saved" activeClassName="active" className="Navbar-item">
                <img src={houseIcon} className="Navbar-item__icon" alt="Home" />
            </NavLink>
        </div>
    )
}
 
export default Navbar;