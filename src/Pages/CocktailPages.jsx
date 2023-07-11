import React from 'react'
import Cocktailimg from "../images/Cocktail1.jpg"
import { useNavigate } from 'react-router-dom'
function CocktailPages() {
    const navigate=useNavigate()
  return (
    <div className="CocktailBg">
    <div className="container py-5 Cocktail-b "   >
        <div className="row">
        <div className="Cocktail col-md-6">
            <div className="Cocktail-img ">
                <img src={Cocktailimg}alt="" className='img-fluid rounded ' />
            </div>
        </div>
         <div className="col-md-6 py-5">
            <div className="containt  ps-5 Cocktail-Border">
            <h4 className='text-center'><i>About The Fantastic New Cocktail at Here <hr  className='text-warning'/></i></h4>
                <h6 className='py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil minus iusto magni, odit sapiente voluptates eaque, vitae quia delectus laudantium consequatur ex architecto laboriosam fuga maiores impedit nisi exercitationem commodi?</h6>
                <b className='pe-3'>Please Visit Here:-----</b>
                <button className='btn btn-outline-primary' onClick={()=>navigate("/Cocktail")}>Buy Now <span class="fa-solid fa-arrow-right text-light"></span></button>
            </div>
         </div>
    </div>
    </div>
    </div>
  )
}

export default CocktailPages
