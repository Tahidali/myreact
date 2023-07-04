import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktailList } from '../Redux/CocktailSlice'
import CocktailCard from '../Component/CocktailCard'


function Cocktail() {
  const {loading,CocktailList}=useSelector((state)=>state.CocktailSl)
  const [searchValue,setsearchValue]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCocktailList({search:searchValue}))
  },[searchValue])

  // if(searchValue == setsearchValue){
  //   alert="good"
  // }else{
  //   return false
  // }
 
  return (
    <div className='container py-4'>
      <div className="row " > 
      <i className='text-dark'>Search Your Favourite Drinks<span className="fa-solid fa-ellipsis fa-fade fa-lg py-2" ></span></i>
        <input type="text" value={searchValue} onChange={(e=>setsearchValue(e.target.value))} className='form-control my-3' placeholder='search.....'/>
        {
          loading && <div className="text-center py-5">
            <div className="spinner-border " role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
        </div>
          }
      
      { CocktailList &&
        CocktailList.map((item,index)=>{
          return <CocktailCard item={item} key={index}/>
        })
      }
      </div>
    </div>
    
  )
}

export default Cocktail