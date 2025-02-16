import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'


function Vans() {

  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  
  useEffect(()=>{

    async function fetchVans(){
        setLoading(true)
        try{
            const data = await getVans()
            setVans(data)
        } catch(err){
            console.error("error: ", err)
            setError(err)
            setVans([])
        } finally{
            setLoading(false)
        }
    }
    fetchVans()
  }, [])

  //Filter the vans if there is a type in the URL query, otherwise return vans
  const filteredVans = typeFilter ? 
                       vans.filter(van => van.type === typeFilter.toLowerCase()) :
                       vans

  if(loading){
    return <h1 className='loading'>Loading vans...</h1>
  }

  if(error){
    return <h1 className='error'>{error.message || 'An error occurred while loading vans'}</h1>
  }

  return (
    <div className='vans-container'>
        <header className='vans-header'>
            <h1>Explore our van options</h1>
            <div className='vans-filters-container'>
                <button 
                    className={`van-filter simple ${typeFilter === "simple" ? 'selected' : ""}`} 
                    onClick={()=>setSearchParams({type: "simple"})}
                    >Simple
                </button>

                <button 
                    className={`van-filter luxury ${typeFilter === "luxury" ? 'selected' : ""}`} 
                    onClick={()=>setSearchParams({type: "luxury"})}
                    >Luxury
                </button>

                <button 
                    className={`van-filter rugged ${typeFilter === "rugged" ? 'selected' :
                    ""}`} 
                    onClick={()=>setSearchParams({type: "rugged"})}
                    >Rugged
                </button>
                {typeFilter ? (
                    <button 
                        className='clr-filter'
                        onClick={()=>setSearchParams({})}
                        >Clear filter
                    </button>
                 ) : null}
                
            </div>
        </header>
        
        <div className='van-cards-container'>

        {filteredVans.map(van => {
                return(
                    <div className='van-card' key={van.id}>
                        <Link className='van-link' 
                                to={van.id}
                                state={{search: searchParams.toString(),
                                        type: typeFilter
                                }}
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

                        <div className={`van-type ${van.type}`}>
                            {van.type[0].toUpperCase() + van.type.slice(1)}</div>
                        </Link>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Vans