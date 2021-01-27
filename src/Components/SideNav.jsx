import React from 'react';
import './SideNav.css'

function SideNav() {
    return (
        <div className="left-nav">
            <nav className="sidenav">
               <a href="/">
                   <button className="side-links">
                       <p>Popular</p>
                   </button>
               </a>
               <a href="/">
                   <button className="side-links">
                       <p>Starter</p>
                   </button>
               </a>
               <a href="/">
                   <button className="side-links">
                       <p>Dessert</p>
                   </button>
               </a>
               <a href="/">
                   <button className="side-links">
                       <p>Fast Food</p>
                   </button>
               </a>
               <a href="/">
                   <button className="side-links">
                       <p>Main Course</p>
                   </button>
               </a>
               <a href="/">
                   <button className="side-links">
                       <p>Beverages</p>
                   </button>
               </a>
            </nav>
        </div>
    )
}

export default SideNav
