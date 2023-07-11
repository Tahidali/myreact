import React, { useContext } from "react";
import { Appdeatails } from "../App";

function Cart() {
  const { cart,ProductCarT} = useContext(Appdeatails);
  console.log("ProductCarT",ProductCarT)
  return (
    <div className="container ">
      <div className="row ">
        <h4>Cocktail Cart</h4>
        <hr />
        <table className="bg-light shadow">
          <thead className=" bg-light" >
            <tr className="text-center  " style={{marginBotto:"20px" , background:" rgba(0, 0, 255, 0.114)"}}>
              <th>Id</th>
              <th>Images</th>
              <th>items Name</th>
              <th>Descrption</th>
              <th>Type</th>
            </tr>
          </thead>
          {cart.map((item, index) => {
            const {
              strDrink,
              idDrink,
              strInstructions,
              strGlass,
              strDrinkThumb,
            } = item;
            return (
                <>             
                 <tbody className="cart" style={{borderBottom:"1px solid gray"}}>
                <tr className="text-center ">
                  <td>{index+1}</td>
                  <td>
                    <img
                      src={strDrinkThumb}
                      alt=""
                      className="img-fluid mt-3 mb-2"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </td>
                  <td>{strDrink}</td>
                  <td className="text-truncate" style={{ maxWidth: "0px" }}>
                    {strInstructions}
                  </td>
                  <td>{strGlass}</td>
                </tr>
              </tbody>
              </>
            );
          })}
        </table>

        {/* ========================================= */}
      <h4 className="py-3">i am Product cart</h4>
      <hr />
        <table className="bg-light shadow text-center">
          <thead className=" bg-light" >
            <tr className="" style={{marginBotto:"20px" , background:" rgba(0, 0, 255, 0.114)"}}>
              <th>Id</th>
              <th>Images</th>
              <th>items Name</th>
              <th>Price</th>
              <th>Descrption</th>
              <th>category</th>
              
            </tr>
          </thead>
          {ProductCarT&&
          ProductCarT.map((item, index) => {
            const {
              title,
              price,
              description,
              category,
              image
            } = item;
            return (
                <>             
                 <tbody className="cart" style={{borderBottom:"1px solid gray"}}>
                <tr className=" ">
                  <td>{index+1}</td>
                  <td>
                    <img
                      src={image}
                      alt=""
                      className="img-fluid mt-3 mb-2"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </td>
                  <td className="text-truncate">{title}</td>
                  <td >{price}</td>
                  <td className="text-truncate" style={{ maxWidth: "0px" }}>
                    {description}
                  </td>
                  <td className="text-truncate">{category}</td>
                </tr>
              </tbody>
              </>
            );
          })}
        </table>

      </div>
    </div>
  );
}

export default Cart;
