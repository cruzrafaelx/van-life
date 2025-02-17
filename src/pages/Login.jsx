import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { loginUser } from '../api'

function Login() {

  const [loginDetails, setLoginDetails] = useState({email:'', password:''})
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const location = useLocation()
  const message = location.state?.message || ""

  async function fetchUserData(){
    try{
      const data = await loginUser(loginDetails)
      console.log(data)
      setError(null)
    } 
      catch(err){
      setError(err)
    } 
      finally{
      setStatus("idle")
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    setStatus("submitting")
    fetchUserData()
    // setError(null)
  }
  
  function handleOnChange(e){
    const {name, value} = e.target
    setLoginDetails(prevLoginDetails => {
      return {
        ...prevLoginDetails,
        [name]: value
      }
    })
  }
  

  return (
    <div className='login-container'>
      {message && <h3>{message}</h3>}
      <h1>Sign in to your account</h1>
      <h3>{error?.message && <h3>{error.message}</h3>}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleOnChange}
          className='email-input'
          name='email'
          type='email'
          value={loginDetails.email}
          placeholder='E-mail address'
        />

        <input
          onChange={handleOnChange}
          className='password-input'
          name='password'
          type='password'
          value={loginDetails.password}
          placeholder='Password'
        />
        <button 
          disabled={status === "submitting"} 
          className='submit-btn'>
            {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p>Don't have an account? <span className='create'>Create one now</span></p>
    </div>
  )
}

export default Login