import React from 'react';
import './index.css';

import logoImage from './assets/logo.png';

const Header = () => {
    return (
        <div className="Header">
            <img src={logoImage} alt="Doggies" className="Header-logo" />
        </div>
    )
}
 
export default Header;