import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Nav = props => {
    return(
        <nav>
            <ul className="navbar">
                <li activeClassName="active"><NavLink exact to="/">Home</NavLink></li>
                <li activeClassName="active"><NavLink to="/entry/0">Test</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;