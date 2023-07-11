import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {ShopingDetails} from  '../Redux/ShopingSlice'

function ShopingCard() {
   const {id}=useParams()
   const{Shopingid,loading}=useSelector(state=>(state.Shoping))
   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(ShopingDetails(id))
   })
  //  if(loading){
  //   return<h1>loading....</h1>
  //  }
  return (
    <div className="container bg-light text-dark shadow" >
        <div className="row ">
          <div className="col-md-5 ">
            <div className="d-flex  d-end">
          <Link to="/Shoping" className='btn text-dark btn-sm border border-2 border-primary'> <span className='fa-solid fa-angles-left fa-fade text-primary'></span></Link>
          </div>
            <span className='fa-solid fa-'></span>
          {/* <div className="card p-3"> */}
            <img src={Shopingid.images} alt=""  className='img-fluid border border-3'/> 
            </div>
            <div className="col-md-5 py-5 my-5">
            <p><i> id:-</i>{id}</p>    
            <h3><i> title:- </i>{Shopingid.title}</h3>   
            <p>{Shopingid.description}</p>   
            </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default ShopingCard
