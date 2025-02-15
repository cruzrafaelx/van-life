import React from 'react'
import {Outlet, Link, useParams} from 'react-router-dom'
import { useState, useEffect} from 'react';
import { IoIosArrowRoundBack  } from "react-icons/io";
import VansLayout from '../../components/VansLayout'


function HostVanDetails() {

  const {id} = useParams()
  const [vans, setVans] = useState(null)
      
    useEffect(()=>{
        
        async function fetchHostVans(){
            try{
                const res = await fetch(`/api/host/vans/${id}`)
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