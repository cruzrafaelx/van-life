import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


function Header() {

  function handleLogout(){
    localStorage.removeItem("loggedin")
    console.log(localStorage.getItem("loggedin"))
  }

  console.log(localStorage.getItem("loggedin"))
  return (
    <header>
        <NavLink 
          className="logo"
          to="/">#VANLIFE
        </NavLink>

        <NavLink  
          className={({isActive}) => `host ${isActive ? "active-link" : null}`}
          to="/host">Host
        </NavLink>

        <NavLink 
          className={({isActive}) => `about ${isActive ? "active-link" : null}`} 
          to="/about">About
        </NavLink>

        <NavLink  
          className={({isActive}) => `vans ${isActive ? "active-link" : null}`}
          to="/vans">Vans
        </NavLink>

        <NavLink  
          className="login"
          to="/login"><MdLogin/>
        </NavLink>
        
        <NavLink  className="logout" onClick={handleLogout} to={"/"}>
          <CiLogout />
        </NavLink>
      </header>
  )
}

export default Header