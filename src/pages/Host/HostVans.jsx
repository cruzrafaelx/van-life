import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getHostVans } from '../../api'

function HostVans() {

  const [vans, setVans] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function fetchHostVans(){
      setLoading(true)
      try{
        const data = await getHostVans()
        console.log(data)
        setVans(data.vans)
      } catch(err){
        console.error(err)
        setError(err)
      } finally{
        setLoading(false)
      }
    }
    fetchHostVans()
  },[])
  
  
  useEffect(()=>{
       console.log(vans)
  },[vans])


  const renderVanDetails = vans && vans.map(van => {
    return (
      <Link to={`${van.id}`} >
        <div className='host-van-card'>
          <img src={van.imageUrl} alt={`${van.name} van`}/>
          <div className='host-van-name'>
            <h3>{van.name}</h3>
            <p>€{van.price}/day</p>
          </div>
        </div>
      </Link>
     
    )
  })

  if(loading){
    return <h1 aria-live='polite' className='loading'>Loading vans...</h1>
  }

  if(error){
    return <h1 aria-live='assertive' className='error'>{error.message || 'An error occurred while loading vans'}</h1>
  }
  
  return (
    <section className='host-container'> 
      <h1>Your listend vans</h1>
      { vans ? (
        <div className='host-van-container'>
          {renderVanDetails}
        </div>
      ) : (
        <h2>Loading vans...</h2>
      )
      }
    </section>
  )
}

export default HostVans