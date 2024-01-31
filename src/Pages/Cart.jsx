import React, { useContext, useEffect } from "react";
import { cartApp } from "../App";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(cartApp);
  const navigate=useNavigate()


  useEffect(() => {
    const data = localStorage.getItem("cartdata");
    if (data) {
      const parsedData = JSON.parse(data);
      setCart(parsedData)
    }
  }, []);

  function RemoveCart(id) {
    let removed = false;
    const removedata = cart.filter((item) => {
      if (!removed && item.id === id) {
        removed = true;
        return false;
      }
      return true;
    });
    setCart(removedata);
  }
  if(cart){

  }else{
    <h1>loading...</h1>
  }
  
  return (
    <div className="container">
      <h3 className="text-center">Cart</h3>
      <button className="btn btn-outline-primary btn-sm" onClick={()=>navigate(-1)} >
      <i class="fa-sharp fa-solid fa-arrow-left"></i>
      </button>
      <table className="table w-100">
        <thead className="bg-info text-center">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Category</th>
            <th>Price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.map((item, index) => {
            const { title, image, description, id, category, price } = item;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    className="img-fluid"
                    style={{ height: "40px", width: "40px" }}
                  />
                </td>
                <td>{title}</td>
                {/* <td className=>{description}</td> */}
                <td>{category}</td>
                <td>{price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => RemoveCart(id)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
