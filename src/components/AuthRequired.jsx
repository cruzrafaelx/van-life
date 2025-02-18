import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'


function AuthRequired() {

    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()

    if(!isLoggedIn){
        return(
            <Navigate to={"login"} 
            state={{message: "You must login first!",
                    location
            }}
            replace/>
        ) 
    }

    return <Outlet />

}

export default AuthRequired