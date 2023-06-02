import React, { useContext } from 'react'
import { AppDetail } from '../App'
import Container from './Container';
import { useNavigate } from 'react-router-dom';

function Carts() {
   const{Cart,setCart}= useContext(AppDetail)
   const cartsback=useNavigate()
  return (<div className="container">
    <button className='btn btn-outline-danger mt-3' onClick={()=>cartsback(-1)}>back</button>
    <div className="row py-5">
        {
            Cart.map((item)=>{
                const{id,name,Price,desp,}=item;
                return<div className="col-md-4 mb-4 ps-5">
                    <div className="card shadow ">
                        <div className="card-body ">
                        <div className="card-header mb-3">
                            <h5>id Name;-{id}</h5>
                        </div>
                        <h1 className='py-2'>Name;-{name}</h1>
                        <button className='btn btn-primary w-100 mb-3' style={{padding:"3px"}}> &#8377;{Price} </button>
                        <p>Desp;-{desp}</p>
                        </div>
                    </div>
                    </div>
            })
        }
    </div>
    </div>
  )
}

export default Carts
