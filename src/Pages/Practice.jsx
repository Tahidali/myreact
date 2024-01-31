import React, { useEffect, useState } from "react";

export default function Practice({num}) {
  var [drink, setdrink] = useState([]);
  var [name,setname]=useState("Sajid")

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((resp) => resp.json())
      .then((data) => setdrink(data.drinks))
      .catch((error)=>console.log("error in ur api check it",error))
  }, []);
  function Changer(e){
    e.preventDefault();
    setname("Tahid")
  }
  return (
    <div className="container">
      <h4>Practice</h4>
      <h1>{name}     {num}</h1>
      <button className="btn btn-danger" onClick={Changer}>Change</button>
      <div className="row">
        {drink &&
          drink.map((item, index) => {
            const { idDrink, strDrink, strDrinkThumb } = item;
            return<div className="col-md-4 p-2" >
              <div className="card">
                <div className="card-body">
                  <img src={strDrinkThumb} alt="" style={{height:"200px",width:"200px"}}/>                  
                </div>
                <p>{idDrink}</p>
                <h3 key={index} >{strDrink}</h3>
              </div>
            </div>;
          })}
      </div>
    </div>
  );
}
