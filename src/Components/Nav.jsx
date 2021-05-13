import React from 'react';
import {Link} from "react-router-dom"

function Nav(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </div>
    );
}

export default Nav;