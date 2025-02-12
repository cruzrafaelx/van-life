import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function VanDetails() {  

  const params = useParams()
  
  useEffect(()=>{

        async function fetchVanDetails(){

        try{
            const res = await fetch(`/api/vans/${params.id}`)
            if (!res.ok) throw new Error(`HTTP Error! ${res.status}`)
            const data = await res.json()
            setVan(data)
        }

        catch(error){
            console.error("An error has been encountered: ", error)
        }
      } 

      fetchVanDetails()
      
   },[])
   
  return (
    <div>vanDetails</div>
  )
}

export default VanDetails