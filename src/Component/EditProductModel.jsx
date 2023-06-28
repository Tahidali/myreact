import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  ErrorMessage, Field, Form, Formik } from 'formik'
import {  object,string,number } from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProduct, aadProduct, getProduct2list } from '../Redux/Product2Slice';
import CancelIcon from '@mui/icons-material/Cancel';

function EditProductModel({Editopen,EditHandleClose,EditValue}) {
  const dispatch=useDispatch()
  const {addProductLoading,error,loading} = useSelector((state)=>state.Product2Sl)
  const initialValues=EditValue

  const validationSchema= object({
    name:string().required("name is required"),
    price:number().required("price is required"),
    category:string().required("category is required"),
    qty:number().required("qty is reqiured")

  })
  function formSubmit(value){
    dispatch(UpdateProduct({formValue:value,EditHandleClose:EditHandleClose}))
  }

  return (
    <Dialog maxWidth="sm" fullWidth open={Editopen}onClose={EditHandleClose} >
      <div className="CancelAdd"> 
    <DialogTitle className=''>Update Your Product </DialogTitle>
    <div className="cancel"  onClick={EditHandleClose}> <CancelIcon/></div>
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
              <button type='submit' className='btn btn-warning ' onClick={EditHandleClose}>
                {
                  addProductLoading ? "adding...":"Update "
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

export default EditProductModel
