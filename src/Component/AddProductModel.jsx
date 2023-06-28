import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  ErrorMessage, Field, Form, Formik } from 'formik'
import {  object,string,number } from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthSlice';
import { aadProduct } from '../Redux/Product2Slice';
import CancelIcon from '@mui/icons-material/Cancel';

function AddProductModel({open,handleClose}) {
  const dispatch=useDispatch()
  const {addProductLoading,error} = useSelector((state)=>state.Product2Sl)
  const initialValues={
    name:"",
    price:0,
    category:"",
    qty:0
  }

  const validationSchema= object({
    name:string().required("name is required"),
    price:number().required("price is required"),
    category:string().required("category is required"),
    qty:number().required("qty is reqiured")

  })
  function formSubmit(value){
  dispatch(aadProduct({formValue:value,handleClose:handleClose}))
  }

  return (
    <Dialog maxWidth="sm" fullWidth open={open}onClose={handleClose} >
      <div className="CancelAdd"> 
    <DialogTitle className=''>Add You Product </DialogTitle>
    <div className="cancel me-2"  onClick={handleClose}> <CancelIcon/></div>
    </div>
    <div className="cancel"></div>
    <h6 className='text-center text-danger'>{error}</h6>
    <DialogContent className='p-3' >
            <Formik validationSchema={validationSchema} 
            initialValues={initialValues} 
            onSubmit={formSubmit}>
              {()=>{
                return<Form className=''>
                <div className="mb-3">
              <Field name="name" type="text" className="form-control" placeholder="name...."/>
              <ErrorMessage name='name'  className='text-danger' component="div"/>
              </div>
              <div className="mb-3">
              <Field name="price" type="number" className="form-control" placeholder="Enter price"/>
              <ErrorMessage name='price' className='text-danger' component="div"/>
              </div>
              <div className="mb-3">
              <Field name="category" type="text" className="form-control" placeholder="Enter category"/>
              <ErrorMessage name='category' className='text-danger' component="div"/>
              </div> <div className="mb-3">
              <Field name="qty" type="number" className="form-control" placeholder="Enter qty"/>
              <ErrorMessage name='qty' className='text-danger' component="div"/>
              </div>
              <div className="d-flex justify-content-center">
              <button type='submit' className='btn btn-primary '>
                {
                  addProductLoading ? "adding...":"submit "
                }   
                </button>
                </div>
                </Form>
              }}
            </Formik>
    </DialogContent>
  </Dialog>
  )
}

export default AddProductModel
