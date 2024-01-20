import { Link ,useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { auth } from './Config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import './Signup.css'


const Signup = () => {
  const[email, setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()

async function handleSubmit(e){
  e.preventDefault()
  try{
  const userCreadential =await createUserWithEmailAndPassword(auth,email,password)
  const user =userCreadential.user
  console.log(user);
  navigate('/login')
  alert('successfully Created')
  }
  catch (error){
    console.log(error);
  }
  }

  return (
    <div className='Signup'>
      <form onSubmit={handleSubmit} className='app'>
        <h1 className='h11'>SIGNUP HEAR</h1>
        <input className='inp1' type={'email'} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
        <br></br>
        <input className='inp1' type={'password'}  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
        <br></br>
        <button className='inp2'  type='submit'>Signup</button>
        <p>Alredy Have an Account <Link to={'/login'}>Login</Link></p>
      </form>
    </div>
  )
}

export default Signup
