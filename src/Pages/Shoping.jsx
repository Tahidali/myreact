import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetShopingData } from "../Redux/ShopingSlice";
import { useNavigate } from "react-router-dom";

function Shoping() {
  const [SearchValue,setSearchValue]=useState("")
  const { ShopingList, loading } = useSelector((state) => state.Shoping);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BtnChange =useRef()
  
  useEffect(() => {
    dispatch(GetShopingData({search:SearchValue}));
  }, [SearchValue]);
  
  // if (loading) {
  //   return (
  //     <div class="d-flex justify-content-center py-5">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="mb-3 ">
        <input value={SearchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" className="form-control" placeholder=" Search Your Item...." />
        </div>
        {
          loading&&<h1>loading...</h1>
        }
        {ShopingList &&
          ShopingList.map((item, index) => {
            const { id, title, price, description, images } = item;
            return (
              <div
                className="col-md-3"
                onClick={() => navigate(`/Shoping/${id}`)}
              >
                <div className="card mb-3 shadow">
                  <div className="card-header">
                    <h6 key={index}>id:{id}</h6>
                  </div>
                  <div className="card-body">
                    <img src={images} alt="" className="img-fluid" />
                    <h4 className="text-truncate">{title}</h4>
                    <p className="text-secondary text-truncate">
                      {description}
                    </p>
                  </div>
                  <div className="main-shoping py-0 d-flex justify-content-between align-items-center">
                      <div className="btn">
                    <button className="btn text-dark btn-sm btn-outline-warning">&#x20B9;{price}</button>
                    </div>
                    <div className="btn">
                      <button ref={BtnChange} className="btn btn-sm btn-warning">Add to Cart</button>
                    </div>
                    </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Shoping;
