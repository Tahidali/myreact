import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink,Link, useLocation, useNavigate } from "react-router-dom";
import { Logout } from "../Redux/AuthSlice";
import { Appdeatails } from "../App";
import { useEffect } from "react";
import Product from "../Pages/Product";

function Navbar() {
  const data = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart,ProductCarT,drinkscart} = useContext(Appdeatails);
  const { islogin } = useSelector((state) => state.Auth);
 
 const lengthStore=(ProductCarT.length +drinkscart.length)
  // console.log(data);
  if (data.pathname === "/Login") {
    return null;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow bg-info ">
        <div className="container-fluid" >
          <NavLink className="navbar-brand">Navbar</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cocktail">
                  Cocktail
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Product2">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Fake store product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Shoping">
                  Shoping
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Weather">
                  Weathermap
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-sm btn-dark position-relative me-2"
            >
              <Link to="/Cart" className="text-light">
              <span className="fa-solid fa-cart-shopping"></span>
              <span className="position-absolute top-0  start-100  bg-dark translate-middle border border-light rounded-circle" style={{height:"20px",width:"20px"}}>

              {lengthStore}
              </span>
              </Link>
            </button>
            {islogin ? (
              <button
                className="btn btn-danger"
                onClick={() => dispatch(Logout())}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
