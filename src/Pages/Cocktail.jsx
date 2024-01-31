import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item_Login from "./Item_Login";

function Cocktail() {
  const [cocktailData, setCocktailData] = useState([]);
  const [search, setSearch] = useState("");
  const [load, setload] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.drinks) {
          setCocktailData(data.drinks);
          setload(false);
        } else {
          setCocktailData([]);
        }
      })
      .catch((error) => ("fetching error", error));
  }, [search]);

  function FetchingApi(e) {
    setSearch(e.target.value);
  }
  if (load) {
    return (
      <div className="text-center">
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <h3>Cocktail</h3>
        <div className="inp pb-3">
          <input
            type="text"
            value={search}
            onChange={FetchingApi}
            className=" form-control"
            placeholder="Search Your Drinks ........ "
          />
        </div>

        {cocktailData.map((item, index) => {
          const { idDrink, strDrink, strInstructions, strDrinkThumb } = item;
          return (
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-header">
                  <h6 key={index}>id:-{idDrink}</h6>
                </div>
                <div className="card-body">
                  <Link to={`/tail/${idDrink}`}>
                  <img
                    src={strDrinkThumb}
                    alt="this is cocktail image"
                    className="img-fluid"
                  />
                  </Link>
                  <h5>Title:-{strDrink}</h5>
                  <p className="text-truncate">
                    <span className="text-secondary">Description:-</span>
                    {strInstructions}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  // to={`/cocktail/${idDrink}`}
}

export default Cocktail;
