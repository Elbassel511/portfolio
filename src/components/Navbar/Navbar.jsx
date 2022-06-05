import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';
function Navbar() {
    function navClass(isActive) {
        return (
            `${classes.listItem}  ${isActive ? classes.active : ""}`
        );
    }
    return (
        <nav >
            <ul className={classes.nav}>
                <li><NavLink className={({ isActive }) => navClass(isActive)} to={'/home'}>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => navClass(isActive)} to={'/projects'}>Projects</NavLink> </li>
                <li><NavLink className={({ isActive }) => navClass(isActive)} to={'/skills'}>Skills</NavLink> </li>
            </ul>
        </nav>
    );
}

export default Navbar;