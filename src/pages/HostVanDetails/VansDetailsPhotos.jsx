import React from 'react'
import { useOutletContext } from 'react-router-dom'

function VansDetailsPhotos() {
  
  const vans = useOutletContext()
  
  return (
    <img className='detail-photo' 
         src={vans.imageUrl} 
         alt={`${vans.name} van`}/>
  )
}

export default VansDetailsPhotos