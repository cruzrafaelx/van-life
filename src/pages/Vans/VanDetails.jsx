import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { IoIosArrowRoundBack  } from "react-icons/io";

function VanDetails() {  

  const params = useParams()
  const location = useLocation()
  const search = location.state?.search || ""
  const type = location.state?.type || "all"
 
  const [van, setVan] = useState(null)

  useEffect(()=>{

        async function fetchVanDetails(){

        try{
            const res = await fetch(`/api/vans/${params.id}`)
            if (!res.ok) throw new Error(`HTTP Error! ${res.status}`)
            const data = await res.json()
            setVan(data.vans)
        }

        catch(error){
            console.error("An error has been encountered: ", error)
        }
      } 

      fetchVanDetails()
      
   },[params.id])
   console.log(van)

  return (
    van ? (
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
    ) : (
            <p>Loading van details...</p>
        )
  )
}

export default VanDetails