import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { IoIosArrowRoundBack  } from "react-icons/io";
import { getVans } from '../../api';

function VanDetails() {  

  const params = useParams()
  const location = useLocation()
  const search = location.state?.search || ""
  const type = location.state?.type || "all"
  
  const [van, setVan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
    useEffect(()=>{
        async function fetchVansId(){
            setLoading(true)
            try{
                const data = await getVans(params.id)
                setVan(data)
            } catch(err){
                console.error(err)
                setError(err)
            } finally{
                setLoading(false)
            }
        }
        fetchVansId()
    },[params.id])
    
    if(loading){
        return <h1 aria-live='polite' className='loading'>Loading vans...</h1>
      }
    
    if(error){
    return <h1 aria-live='assertive' className='error'>{error.message || 'An error occurred while loading vans'}</h1>
    }
   
  return (
        van && (
            <section>
                <div className='van-details-container'>
                    <Link className='van-details-back-link' 
                            relative={"path"} 
                            to={search !== null ? `..?${search}` : ".."}>
                        <div className='van-details-back'>
                            <IoIosArrowRoundBack />
                            <p>{`Back to ${type} vans`}</p>
                        </div>
                    </Link>
                    <img className='van-details-img' src={van.imageUrl}/>
                    <div className={`van-details-type ${van.type}`}>
                        {van.type[0].toUpperCase() + van.type.slice(1)}
                    </div>
                    <h2 className='van-details-name'>{van.name}</h2>
                    <div className='van-details-price-container'>
                        <h2 className='van-details-price'>€{van.price}</h2>
                        <p>/day</p>
                    </div>
                    <p className='van-details-desc'>{van.description}</p>
                    <button className='van-details-btn'>Rent this van</button>
                </div>
            </section>
        )
  )
}

export default VanDetails