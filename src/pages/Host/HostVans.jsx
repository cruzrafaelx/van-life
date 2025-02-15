import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function HostVans() {


  const [vans, setVans] = useState(null)
    
  useEffect(()=>{
      
      async function fetchHostVans(){
          try{
              const res = await fetch("/api/host/vans")
              if(!res.ok) throw new Error("HTTP Error!", res.status)
              const data = await res.json()
              setVans(data.vans)
          }
          
          catch(error){
              console.error("Error!") 
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