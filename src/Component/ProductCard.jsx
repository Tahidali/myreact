import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const { id, title, price, description, category, image } =item;
  const navigate=useNavigate()
  return (
    <div className="col-md-4">
      <div className="card shadow mb-4"  onClick={()=>navigate(`/Product/${id}`)}>
        <div className="card-header">
          <h6>Id:- {id}</h6>
        </div>
        <div className="card-body ">
        <img src={image} alt="" className="img-fluid" style={{height:"300px",width:"280px"}} />
            <h5 className="text-truncate">{title}</h5>
            <button className="btn btn-info">${price}</button>
            <h6>{category}</h6>
            <p className="text-truncate">{description}</p>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
