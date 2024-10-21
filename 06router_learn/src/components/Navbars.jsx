import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbars() {
  return (
    <div>
      <nav>
        <NavLink className ={(e)=> {return e.isActive? "red": " "}} to="/"><li>home</li></NavLink>
        <NavLink className ={(e)=> {return e.isActive? "red": " "}} to="/about"><li>about</li></NavLink>
        <NavLink className ={(e)=> {return e.isActive? "red": " "}} to="/contact"><li>contact</li></NavLink>
        <NavLink className ={(e)=> {return e.isActive? "red": " "}} to="/login"><li>login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbars