import React from 'react'
import {Outlet, Link, useParams} from 'react-router-dom'
import { useState, useEffect} from 'react';
import { IoIosArrowRoundBack  } from "react-icons/io";
import VansLayout from '../../components/VansLayout'
import { getHostVans } from '../../api';


function HostVanDetails() {

  const {id} = useParams()
  const [vans, setVans] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
      

    useEffect(()=>{
      async function fetchHostVansId(){
        setLoading(true)
        try{
          const data = await getHostVans(id)
          console.log(data)
          setVans(data.vans)
        } catch(err){
          console.error(err)
          setError(err)
        } finally{
          setLoading(false)
        }
      }
      fetchHostVansId()
    },[id])
   
    useEffect(()=>{
         console.log(vans)
    },[vans])

 
    const renderVanDetails = vans && vans.map(van => {
      return(
        <div className='host-van-details-card'>
          <img src={van.imageUrl} alt={`${van.name} van`}></img>
          <div className='host-van-details-name'>
            <div className={`host-van-details-type ${van.type}`}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </div>
            <h1>{van.name}</h1>
            <p>€{van.price}<span className='day'>/day</span></p>
          </div>
        </div>
      )
    })

    if(loading){
      return <h1 className='loading'>Loading van...</h1>
    }
  
    if(error){
      return <h1 className='error'>{error.message || 'An error occurred while loading vans'}</h1>
    }

  return (
    <section className='host-container'>
       <Link className='host-van-details-back-link' relative={"path"} to={".."}>
          <div className='host-van-details-back'>
              <IoIosArrowRoundBack />
              <p>Back to all vans</p>
          </div>
      </Link>

      <div className='host-van-details-container'>
        {vans && renderVanDetails}
        <VansLayout/>
        <Outlet context={vans ? vans[0] : null} />
      </div>
      
    </section>
  )
}

export default HostVanDetails