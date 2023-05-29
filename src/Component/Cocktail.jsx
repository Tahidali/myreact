import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Cocktail() {
  const [drinks, setdrinks] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [inpValue, setinpValue] = useState("");

  function fetchcocktail() {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inpValue}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setdrinks(data.drinks);
        setisloading(false);
      });
  }

  useEffect(()=>{
    fetchcocktail()
},[])
  function handler() {
    if(inpValue==""){
      alert("fill the input with your favrite drinks")
    }
    return fetchcocktail();
  }

  if (isloading) {
    return <h4 className="text-center">loading......</h4>;
  }
  return (
    <div className="text-center">
      <h3 className="py-5">Cocktail</h3>
      <input
        value={inpValue}
        onChange={(e) => setinpValue(e.target.value)}
        type="text py-2"
        className="form-control container"
        placeholder="Enter Your Drinks"
      />
      <button className="btn btn-primary" onClick={handler}>
        Search
      </button>
      <div className="row">
        {drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strCategory,
            strDrinkThumb,
            strInstructions,
          } = item;
          return (
            <div key={idDrink} className="col-3 col-md-3 mb-3 py-3">
              <div className="card">
                <img src={strDrinkThumb} alt="" />
                <div className="card-body">
                  <h6>{idDrink}</h6>
                  <h3>{strDrink}</h3>
                  <h6>{strCategory}</h6>
                  <p className="text-truncate" title={strInstructions}>{strInstructions}</p>
                  <Link  className="btn btn-outline-warning text-black" to={`/Cocktail/${idDrink}`}>
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cocktail;
