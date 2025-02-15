import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <>
        <nav className='host-nav'>
            <NavLink 
              className={({isActive}) => isActive ? "active-link" : null}
              to="." end>Dashboard
            </NavLink>

            <NavLink 
              className={({isActive}) => isActive ? "active-link" : null} 
              to="income">Income
            </NavLink>

            <NavLink 
              className={({isActive}) => isActive ? "active-link" : null} 
              to="hostvans">Vans
            </NavLink>

            <NavLink 
              className={({isActive}) => isActive ? "active-link" : null} 
              to="reviews">Reviews
            </NavLink>

        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout