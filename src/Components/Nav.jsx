import React from 'react'
import './Nav.css';
// import SearchIcon from '@material-ui/icons';

function Nav() {
    return (
        <div className="nav">
            <header>
                <nav className="header-nav">
                    <a href="/" className="title">
                        <h4 className="nav-title">SUZLON <span id="header-title">RESTRO</span> </h4>
                    </a>
                    <div class="searchBox">
                        <input type="search" className="search-input" placeholder="Search items"/>
                        </div>
                        <div className="cart">
                            <a href="/" className="cart-link">
                                <h4 className="cart-items">
                                    <button className="left-cart">Items in Cart {}</button>
                                </h4>
                            </a>
                        </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav
