import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appdeatails } from "../App";

function CocktailCard({ item }) {
  const { strDrink, idDrink, strInstructions, strGlass, strDrinkThumb } = item;
  const navigate = useNavigate();

  const{cart,setCart}= useContext(Appdeatails)
  function addTocart(item){
      setCart([...cart,item])
  }
  return (
    <div
      className="col-md-3" >
      <div
        className="card mb-4 shadow "
        style={{ height: "400px", overflow: "hidden" }}
      >
        <div className=" card-header d-flex justify-content-between align-items-center">
          <div className="cart">
            <h6 className=" my-2">id:{idDrink}</h6>
          </div>
          <div className="cart-btn ">
            <button className="btn btn-sm btn-warning" onClick={()=>addTocart(item)}>Add to Cart</button>
          </div>
        </div>
        <div className="card-header">
          <div className="card-body"  onClick={() => navigate(`/Cocktail/${idDrink}`)}
      style={{ cursor: "pointer" }}>
            <img
              src={strDrinkThumb}
              alt=""
              className="img-fluid border-radius"
            />
            <h4 className="my-2">Name:{strDrink}</h4>
            <h5>Glass Type:{strGlass}</h5>
            <p className="text-truncate">{strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
