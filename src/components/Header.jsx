import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
        <Link className='logo' to="/">#VANLIFE</Link>
        <Link className='host header-link' to="/host">Host</Link>
        <Link className='about header-link' to="/about">About</Link>
        <Link className='vans header-link' to="/vans">Vans</Link>
      </header>
  )
}

export default Header