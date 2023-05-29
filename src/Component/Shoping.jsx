import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shoping() {
    const[products,setproducts]=useState([])
    function fetchdata(){
        fetch(`https://fakestoreapi.com/products`)
        .then((resp)=>resp.json())
        .then((data)=>setproducts(data))
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
   <>
   <div className="container py-3">
    <div className="row">
        {
            products.map((item)=>{
                const{id,title,price,image}=item;
               return<div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h6>{id}</h6>
                            <img src={image} alt="" className='img-fluid' style={{height:"280px",width:"400px"}}/>
                           <p className='text-truncate'>{title}</p> 
                            <Link to={`/Shoping/${id}`} className='btn btn-primary'>{price}</Link>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
   </div>

   </>
  )
}

export default Shoping
