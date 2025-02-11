import React from 'react'
import { useState, useEffect } from 'react'


function Vans() {

  const [vans, setVans] = useState([])

  useEffect(()=>{

    async function fetchVans(){
        try{
            const res = await fetch("/api/vans")
            if(!res.ok) throw new Error(`HTTPS Error! Status: ${res.status}`)
            const data = await res.json()
            setVans(data.vans)
        }
       
        catch(error){
            console.error("Fetch error: ", error)
        }
    }

    fetchVans()
  },[])

  console.log(vans)

  return (
    <div className='vans-container'>
        <div className='van-cards-container'>
            
        {   
            vans ? (
                vans.map(van => {

                    return(
                    <div className='van-card' key={van.id}>
                        <img className='van-img' 
                            src={van.imageUrl}
                            alt={`van ${van.name}`}
                        >
                        </img>
    
                        <div className='van-details'>
                            <h2 className='van-name'>{van.name}</h2>
                            <div className='van-price-container'>
                                <h2 className='van-price'>€{van.price}</h2>
                                <p>/day</p>
                            </div>
                        </div>
    
                        <div className={`van-type ${van.type}`}>{van.type}</div>
                    </div>
                    )
                })
            ) :
            
            <p>Loading vans...</p>
        }

        </div>
    </div>
  )
}

export default Vans