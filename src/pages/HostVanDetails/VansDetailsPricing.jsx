import React from 'react'
import { useOutletContext } from 'react-router-dom'

function VansDetailsPricing() {

  const vans = useOutletContext()

  return (
    vans ? (
      <h2 className='detail-price'>
      €{vans.price}.00<span>/day</span></h2>
    ) : (
      <h2>Loading price</h2>
    )
    
  )
}

export default VansDetailsPricing