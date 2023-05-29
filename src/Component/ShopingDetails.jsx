import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopingDetails() {
    const[productsDetails,setproductsDetails]=useState([])
    const{id}=useParams();

    function fetchshop(){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((resp)=>resp.json())
    .then((data)=> console.log(data[0]))

    }
    useEffect(()=>{
        fetchshop()
    },[])
  return (<div className="conatiner">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <h2>{id}</h2>
                    <h5>{productsDetails.title}</h5>
                    <img src={productsDetails.image} alt="" />
                    <h4>{productsDetails.category}</h4>
                    <Link to={-1} className="btn btn-danger"> Back</Link>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ShopingDetails
