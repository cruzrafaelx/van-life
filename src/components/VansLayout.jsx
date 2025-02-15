import React from 'react'
import {NavLink} from 'react-router-dom'

function VansLayout() {
  return (
    <nav className='host-van-details-nav'>
        <NavLink 
            className={({isActive}) => isActive ? "active-link" : null}
            to="." end>Details
        </NavLink>

        <NavLink 
            className={({isActive}) => isActive ? "active-link" : null}
            to="vansdetailspricing" >Pricing
        </NavLink>

        <NavLink 
            className={({isActive}) => isActive ? "active-link" : null}
            to="vansdetailsphotos" >Photos
        </NavLink>
    </nav>
  )
}

export default VansLayout