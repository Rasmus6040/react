import React from 'react';
import {slide as Menu} from 'react-burger-menu';

function Navbar() {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/"> Home</a>
            <a id="portfolie" className="menu-item" href="/portfolie"> Portfolie</a>
        </Menu>
    )
}

export default Navbar