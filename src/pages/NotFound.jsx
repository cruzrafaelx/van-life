import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found-container'>
        <h1>Sorry, the page that you were looking for was not found.</h1>
        <Link to={"/"}>
            <button className='return-home-btn'>Return to home</button>
        </Link>
    </div>
  )
}

export default NotFound