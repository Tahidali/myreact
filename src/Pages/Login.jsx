import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Redux/AuthSlice'
import {  ErrorMessage, Field, Form, Formik } from 'formik'
import {  object,string } from 'yup'

function Login() {
  // const [email,setEmail]=useState("")
  // const[password,setPassword]=useState("") 
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // Use Ref
 const emialRefrence=useRef()
 const passwordReference=useRef()
 
  const {loading,errorMessage}=useSelector((state)=>state.Auth)

  const validationSchema= object({
    email:string().email("please enter a valid email").required("email is required"),
    password:string().max(20).min(8,"password should be 8 digits").required("password is required")
  })

  const initialValues={
    email:"",password:""
  }
 
  // function handleSubmit(e){
  //   e.preventDefault();
  //   const formValue={email, password}
  //   dispatch(login({formValue,navigate}))
  // }
  function formSubmit(value){
    dispatch(login({formValue:value,navigate}))
  }
  useEffect(()=>{
    emialRefrence.current.focus()
  },[])

  function HideShowPass(){
    if(passwordReference.current.type === "password"){
        return passwordReference.current.type="text"
    }else{
      passwordReference.current.type = "password"
    }
  }
  return (
    <div className="conatainer py-5 ">
        <div className="row">
            <div className="col-md-4 offset-md-4  border border-2 p-5 bg-light shadow">
             <h6>
               {errorMessage}
               </h6>
            <Formik validationSchema={validationSchema} 
            initialValues={initialValues} 
            onSubmit={formSubmit}>
              {()=>{
                return<Form className=''>
                  <h4>log in</h4>
                <div className="mb-3">
              <Field innerRef={emialRefrence} name="email" type="email" className="form-control" placeholder="Email...."/>
              <ErrorMessage name='email'  className='text-danger' component="div"/>
              </div>
              <div className="mb-3 d-flex justify-item-center align-items-center">
                <div className="div w-100 ">
              <Field name="password" type="password" className="form-control" placeholder="password...." innerRef={passwordReference} 
              onClick={HideShowPass}
              />
              <ErrorMessage name='password' className='text-danger' component="div"/>
              </div>
              <span onClick={HideShowPass} className=' fa-solid fa-eye text-secondary' ></span>
              </div>
              <button type='submit' className='btn btn-primary'>
                {loading?"login":"Submit"}
                </button>
                </Form>
              }}
            </Formik>


              {/* <form action="">
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
                </form> */}
            </div>
        </div>
    </div>
  )
}

export default Login