import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <h1 className="portfolio">
            Portfolio
        </h1>
        <ul className='links'>
            <CustomLink to="/about">About</CustomLink>

            <CustomLink to="/resume">Resume</CustomLink>

            <CustomLink to="/skill">Skills</CustomLink>

            <CustomLink to="/project">Projects</CustomLink>
        </ul>
    </nav>
}

function CustomLink( {to, children, ...props} ) {
    const path = window.location.pathname;
    return (
        <li className={ path === to ? "active":"" }>
            <Link to={ to } { ...props }>
                { children }
            </Link>
        </li>
    )
} // We are reusing the same link component for different different pages. 1 CustomLink for multiple pages