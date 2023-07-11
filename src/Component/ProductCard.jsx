import React, { useContext, useRef } from "react";
import { Appdeatails } from "../App";

function ProductCard({ item }) {
  const { id, title, price, description, category, image } =item;
  const BtnChange=useRef()
  const {ProductCarT,setProductCarT}=useContext(Appdeatails)

  function addToCart(item){
    setProductCarT([...ProductCarT,item])
    BtnChange.current.style.background="rgb(9, 5, 128)";
    BtnChange.current.style.color="white"
  }
  return (
    <div className="col-md-3">
      <div className="card shadow mb-4">
        <div className="card-header">
          <h6>Id:- {id}</h6>
        </div>
        <div className="card-body ">
        <img src={image} alt="" className="img-fluid" style={{height:"280px",width:"200px"}} />
            <h5 className="text-truncate">{title}</h5>
            <div className="btn-main  d-flex justify-content-between align-items-center">
              <div className="btn">
            <button className="btn btn-sm btn-outline-warning text-dark">${price}</button>
            </div>
            <div className="btn">
            <button  ref ={BtnChange}className="btn btn-sm btn-warning" onClick={()=>addToCart(item)}>Add to Cart</button>
            </div>
            </div>
            <h6>{category}</h6>
            <p className="text-truncate">{description}</p>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
