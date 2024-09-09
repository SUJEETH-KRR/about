import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar (props) {

    return <nav className="nav">
        <img src='https://cdn-icons-png.flaticon.com/512/187/187840.png?w=740&t=st=1678989228~exp=1678989828~hmac=62a8ec7e9d3c9281c7a79dd849baf322c58b4d4b01ba4101a6d8a4ba570ddf6e' style={{height:'40px'}}></img>

        <ul className='links'>

            <CustomLink to="/about">About</CustomLink>

            <CustomLink to="/resume">Experience</CustomLink>

            <CustomLink to="/skill">Skills</CustomLink>

            <CustomLink to="/project">Projects</CustomLink>
        </ul>
    </nav>
}

function CustomLink( {to, children, ...props} ) {
    const path = window.location.pathname;
    return (
        <li className={ path === to ? "active":"" }>
            <NavLink to={ to } { ...props }>
                { children }
            </NavLink>
        </li>
    )
} // We are reusing the same link component for different different pages. 1 CustomLink for multiple pages

export default Navbar;