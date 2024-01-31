import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { cartApp } from "../App";

function Navbar({setShow}) {
   const{cart,setCart}=useContext(cartApp)

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand ps-5" href="#">
            Navbar
          </a>
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
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/data">
                  Data
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/back">
                  UserColor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Crud">
                  Crud
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/fetch">
                  Fetch Data
                </NavLink>
              </li>
              <li>
              <NavLink className="nav-link" to="/tail">
                  Cocktail
                </NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/Item_Login">
                  Item_Login
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/practice">
                  Practice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/changer">
                  Changer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Counter">
                  Counter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/props">
                  Props
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tictacgame">
                  TicTacGame
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Todo">
                  TodoApp
                </NavLink>
              </li> */}
              
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/New">
                  New
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/UserDetails">
                  UserDetails
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Crudop">
                  CrudOperation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Car">
                  Car
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Operation">
                  New Operation
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Latest">
                  Lateset
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/slider">
                  Slider
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/crud20">
                  Crud2.0
                </NavLink>
                </li> */}
            </ul>
            <form className="d-flex " role="search">
              <div>
                <input type="text" className="form-control" placeholder="Search.." onChange={((e)=>setShow(e.target.value))}/>
              </div>
              {/* <Link to="/Cart"
                className=" btn btn-sm btn-primary position-relative me-2"
              > 
              <i class="fa-solid fa-cart-shopping "></i>
                <span className="position-absolute top-2 start-100 translate-middle p-1 bg-danger border border-light rounded-circle ">
                  {cart.length}<span className="visually-hidden">New alerts</span>
                </span>
              </Link> */}
              <div>
                {/* sign */}
                <Link  to="/Login" className="btn btn-outline-success" type="submit">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
