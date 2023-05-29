import React, { useState } from 'react'
import { useEffect } from 'react';

function Fetch_api() {

    const[drinks,setdrinks]=useState([])
    const[isloading,setisloading]=useState(true)
    const [searchValue,setsearchValue]=useState("")

function fetchcockail(){    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((resp)=>resp.json())
    .then((data)=>{
        setdrinks(data.drinks);
        setisloading(false)
    });
}
useEffect(()=>{
    fetchcockail()
    
},[])

function handler(){
    fetchcockail();
}
if(isloading){
    return<h1>loading....</h1>
}
  return (
    <div className='text-center'>
    <h1>Cocktail</h1>
    <input value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} type="text" className=' form-control w-50 ms-5' placeholder="Search Your Drinks..." />
    <br />
    <button className='btn btn-info' onClick={handler}>Search</button>
    <div className="row" >
            {
                drinks.map((item)=>{
                    const {strDrink,strDrinkThumb,strInstructions,strGlass,idDrink}=item;
                    return(
                        <div  key={idDrink} className="col-3 col-md-3 mb-3">
                            <div className="card">
                                <img src={strDrinkThumb}alt="" />
                                <div className="card-body">
                                    <h3>Drink Name: {strDrink}</h3>
                                    <p className='text-truncate' title={strInstructions}>{strInstructions}</p>
                                    <h4>{strGlass}</h4>
                                    <button className='btn btn-info'>Buy Now</button>
                                </div>
                            </div>
                            </div>
                    )
                })
            }
    </div>
    </div>
  )
}

export default Fetch_api
