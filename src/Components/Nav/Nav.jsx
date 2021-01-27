import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Nav() {
    return (
        <nav className="nav-bar">
            <span className="navbar-toggle" id="js-navbar-toggler">
                <MenuRoundedIcon />
                <a href="/" className="logo">Logo</a>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="/" className="nav-links">Products</a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">Contact</a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">Cart</a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">About</a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">Blog</a>
                    </li>
                </ul>
            </span>
        </nav>
    )
}

export default Nav
