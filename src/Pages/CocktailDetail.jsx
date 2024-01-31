import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CocktailDetail() {
  const [cocktailDetails, setCocktailDetails] = useState({});
  const { id } = useParams();
  var navigat=useNavigate()

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.drinks) {
          setCocktailDetails(data.drinks[0]);
        }
      });
  }, [id]);

  function aap (){
    alert("I am happy (.^.)")
  }
  const { strDrink, strInstructions, strDrinkThumb } = cocktailDetails;

  return (
    <div className='container'>
      <h2>cocktailDetails</h2>
      <Link to="/tail" className="text-danger">Back</Link>
      <div className="card">
        <div className="card-body" onClick={()=>navigat(aap())}>
        <img src={strDrinkThumb} alt={strDrink} className='img-fluid'style={{height:"400px",width:"400px"}} />
        <h1 >{strDrink}</h1>
        <p>{strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;
