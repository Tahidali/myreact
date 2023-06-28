import React, { useState } from 'react'
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
              <Field name="email" type="email" className="form-control" placeholder="Email...."/>
              <ErrorMessage name='email'  className='text-danger' component="div"/>
              </div>
              <div className="mb-3">
              <Field name="password" type="password" className="form-control" placeholder="password...."/>
              <ErrorMessage name='password' className='text-danger' component="div"/>
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