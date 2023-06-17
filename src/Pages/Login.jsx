import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Redux/AuthSlice'

function Login() {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("") 
  const dispatch=useDispatch()
  const navigate=useNavigate()
 
  function handleSubmit(e){
    e.preventDefault();
    const formValue={email, password}
    dispatch(login({formValue,navigate}))
  }
  return (
    <div className="conatainer py-5">
        <div className="row">
            <div className="col-md-4 offset-md-4 border border-2 p-5 bg-light shadow">
               <Link to="/" className='text-decoration-none'>
               <span className='fa-solid fa-angles-left fa-fade text-primary'></span>Back 
                </Link>
                <h3 className='text-center mb-4'>Sign in</h3>
                <div className='mb-3'>
                <input  onChange={(e)=> setEmail(e.target.value)} type="text "className='form-control' placeholder='Email......' />
                </div>
                <div className='mb-3'>
                <input onChange={(e)=>setPassword(e.target.value)} type="text"className='form-control' placeholder='password.....'/>
                </div>
                <div className='text-center'>
                <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login