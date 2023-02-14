import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    
    <nav>
 <NavLink exact to="/">Ma3hub</NavLink >
 <NavLink to="/our_cars">Our cars</NavLink >
 <NavLink to="/about">Reviews</NavLink >




    </nav>
    
  )
}

export default NavBar