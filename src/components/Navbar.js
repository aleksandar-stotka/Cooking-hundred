import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/">
                    Cooking 
                </Link>
                <Link to="/create">
                 create
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
