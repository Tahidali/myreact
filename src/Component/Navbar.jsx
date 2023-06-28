import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useLocation, useNavigate} from "react-router-dom"
import { Logout } from '../Redux/AuthSlice';

function Navbar() {
  const data=useLocation()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {islogin}=useSelector((state)=>state.Auth)
  console.log (data);
  if(data.pathname==="/Login"){
    return null
  }
  return (
    <>
 <nav className="navbar navbar-expand-lg shadow" style={{backgroundColor:"lightskyblue"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" >Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Cocktail">Cocktail</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Product2">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Products">Fake Api</NavLink>
        </li>
      </ul>
    </div>
    {
      islogin? <button className='btn btn-danger' onClick={()=>dispatch(Logout())}>Logout</button>:<button className='btn btn-primary' onClick={()=>navigate("/login")}>login</button>
    }
  </div>
</nav>

    </>
  )
}

export default Navbar
