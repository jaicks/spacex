import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/history">SpaceX History</NavLink></li>
                    <li><NavLink to="/address">SpaceX Address</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;