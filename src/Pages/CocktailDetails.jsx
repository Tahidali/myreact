import React, { useEffect } from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { getCocktailDetails  } from '../Redux/CocktailSlice'
import {loading} from "../Redux/CocktailSlice"

function CocktailDetails() { 
 const {id}=useParams()
const dispatch=useDispatch();
const {loading,CocktailDetails}=useSelector(state=>(state.CocktailSl))
console.log("cock",CocktailDetails)
useEffect(()=>{
    dispatch(getCocktailDetails(id))
},[])

if(loading){
  return<div className="text-center py-5">
  <div className="spinner-border " role="status">
<span className="visually-hidden ">Loading...</span>
</div>
</div>
}

  return (<div className="container py-5 text-center ">
    <div className="col-md-4 offset-md-3">
    <div className="card mb-4 shadow " >
          <div className="card-header">
            <div className="row">
              <div className="col-3 d-flex ">
                <Link to="/Cocktail" className='btn text-dark btn-sm border border-2 border-primary'> <span className='fa-solid fa-angles-left fa-fade text-primary'></span></Link>
          <h6 className='text-center my-2 ms-5'>id:{id}</h6>
          </div>
          </div>
          </div>
         <div className="card-header">
          <div className="card-body">
            <img src={CocktailDetails.strDrinkThumb} alt="" className='img-fluid border-radius' />
            <h4 className='my-2'>Name:{CocktailDetails.strDrink}</h4>
            <h5>Glass Type:{CocktailDetails.strGlass}</h5>
            <p className='text-truncate' >{CocktailDetails.strInstructions}</p>
          </div>
          </div> 
        </div>
    </div>
  </div>
  )
}

export default CocktailDetails
