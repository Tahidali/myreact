import React from 'react'
import { useNavigate } from 'react-router-dom'

function CocktailCard({item}) {
    const {strDrink,idDrink,strInstructions,strGlass,strDrinkThumb}=item
    const navigate = useNavigate()
  return (
     <div className="col-md-3" onClick={()=>navigate(`/Cocktail/${idDrink}`)} style={{cursor:'pointer'}}>
        <div className="card mb-4 shadow " style={{height:"400px",overflow:'hidden'}} >
          <div className="card-header">
          <h6 className='text-center my-2'>id:{idDrink}</h6>
          </div>
         <div className="card-header">
          <div className="card-body">
            <img src={strDrinkThumb} alt="" className='img-fluid border-radius' />
            <h4 className='my-2'>Name:{strDrink}</h4>
            <h5>Glass Type:{strGlass}</h5>
            <p className='text-truncate'>{strInstructions}</p>
          </div>
          </div> 
        </div>
        </div>
  )
}

export default CocktailCard
