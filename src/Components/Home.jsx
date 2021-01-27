import React from 'react'
import Nav from './Nav'
import SideNav from './SideNav'
import FoodMenu from './FoodMenu'

function Home() {
    return (
        <div className="home">
            {/* Nav bar */}
            <Nav />
            {/* Side bar */}
            <SideNav />
            {/* Food Menu */}
            <FoodMenu />
        </div>
    )
}

export default Home
