import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../Redux/ProductSlice'
import ProductCard from '../Component/ProductCard'

function Product() {
  const {ProductList,loading}=useSelector((state)=>state.ProductSl)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProductList())
  },[])

  // if(loading){
  //   <h1>loading</h1>
  // }else{
    
  // }
  if(loading){
    return<div className="text-center py-5">
    <div className="spinner-border " role="status">
  <span className="visually-hidden">Loading...</span>
     </div>
</div>
  }
  return (
    <div>
      <h2 className='text-center py-5'> i am Product</h2>
     <div className="container">
      <div className="row">
            { ProductList &&
              ProductList.map((item,index)=>{
                return(<ProductCard item ={item} key={index}/>
                )
              })
            }
          </div>
          </div>
          </div>
          
  )
}

export default Product