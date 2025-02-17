import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { loginUser } from '../api'

function Login() {

  const [loginDetails, setLoginDetails] = useState({email:'', password:''})
  const location = useLocation()
  const message = location.state?.message || ""

  async function fetchUserData(){
    try{
      const data = await loginUser(loginDetails)
      console.log(data)
    } catch(err){
      console.error(err)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(loginDetails)
    fetchUserData()
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
        <button className='submit-btn'>Sign in</button>
      </form>
      <p>Don't have an account? <span className='create'>Create one now</span></p>
    </div>
  )
}

export default Login