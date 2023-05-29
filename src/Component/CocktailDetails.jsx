import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetails() {
  const { id } = useParams();
  const [drinkDetails, setdrinkdetails] = useState({});
  const [isloading, setisloading] = useState(false);

  function fetchdata() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => setdrinkdetails(data.drinks[0]));
  }
  useEffect(() => {
    fetchdata();
  }, []);

  if (isloading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container py-5">
        <div className="row  ">
          <div className="col-md-4 ">
            <div className="card shadow p-2 bg-light">
              <div className="card-body ">
                <img src={drinkDetails.strDrinkThumb} width="100%" alt="" />
              </div>
              <h4>Id:- {id}</h4>
              <h4>Name: {drinkDetails.strDrink}</h4>
              <h5> Type Of Drink:{drinkDetails.strCategory}</h5>
              <p>
                <b> Discription:</b>
                {drinkDetails.strInstructions}
              </p>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CocktailDetails;
