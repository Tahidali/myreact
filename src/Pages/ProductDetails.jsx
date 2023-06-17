import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../Redux/ProductSlice'

function ProductDetails() {
  const {id}=useParams()
const dispatch=useDispatch();
const {loading,ProductDetails}=useSelector((state)=>state.ProductSl)
console.log("pro",ProductDetails)
useEffect(()=>{
    dispatch(getProductDetails(id))
},[])
   
   return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h6>id:{id}</h6>
              <h2>{ProductDetails.title}</h2>
              {/* {ProductDetails.price} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
