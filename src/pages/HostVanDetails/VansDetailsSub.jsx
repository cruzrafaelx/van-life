import React from 'react'
import { useOutletContext } from 'react-router-dom'

function VansDetailsSub() {

  const vans = useOutletContext()
  console.log(vans)

  return (
    vans ? (
      <div>
        <p><span className='detail-name'>Name:</span> {vans.name}</p>
        <p><span className='detail-name'>Category:</span> {vans.type}</p>
        <p><span className='detail-name'>Description:</span> {vans.description}</p>
        <p><span className='detail-name'>Visibility:</span> public</p>
     </div>
    ) :
    <h1>Loading details...</h1>
  )
}

export default VansDetailsSub