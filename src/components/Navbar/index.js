import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


function Navbar () {
    return (
        <div className="navbar-container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;