import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
        <header className='vans-header'>
            <h1>Explore our van options</h1>
            <div className='vans-filters-container'>
                <div className='van-filter'>Simple</div>
                <div className='van-filter'>Luxury</div>
                <div className='van-filter'>Rugged</div>
                <div className='clr-filter'>Clear filter</div>
            </div>
        </header>
        
        <div className='van-cards-container'>
        
        {   
            vans ? (
                vans.map(van => {

                    return(
                    
                        <div className='van-card' key={van.id}>
                            <Link className='van-link' 
                                  to={`/vans/${van.id}`}
                                  aria-label={`View details for ${van.name}, priced at €${van.price} per day.`}
                            >
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
                            </Link>
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