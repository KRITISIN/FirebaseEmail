import { Link ,useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { auth } from './Config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import './Login.css'


const Login = () => {
    const[email, setEmail]=useState("")
    const[password,setPassword]=useState("")
  const navigate=useNavigate()

   async function handleSubmit(e){
   e.preventDefault()
  try{
  const userCreadential =await signInWithEmailAndPassword(auth,email,password)
  const user =userCreadential.user
  console.log(user);
  navigate('/home')
  alert('successfully Created')
  }
  catch (error){
    console.log(err);
  }
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit} className='app'>
        <h1>LOGIN HEAR</h1>
        <input className='inp1' type={'email'} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
        <br></br>
        <input className='inp1' type={'password'}  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
        <br></br>
        <button className='inp2' type='submit'>Login</button>
        <p>Does Not Have an Account <Link to={'/signup'}>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login

