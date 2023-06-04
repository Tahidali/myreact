import React, { useContext } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import CourseDetails from '../Pages/CourseDetails';
import { AppDetail } from '../App';
import Carts from './Carts';
import LoginButton from './LoginButton';

function Navbar() {
  const {login,setLogin,Cart}=useContext(AppDetail)
  const pathname=useLocation()
  const navigate=useNavigate()
 
function logout(){
  setLogin(false);
  localStorage.removeItem("Login")
  navigate("/Login")
}
if(pathname==="/Login"){
  return null;
}
  return (
<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link to="/NavText" className="navbar-brand" >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Courses" className="nav-link" >Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/Cocktail" className="nav-link" >Cocktail</Link>
        </li>  
        <li className="nav-item">
          <Link to="/Shoping" className="nav-link" >Shoping</Link>
        </li>   
      
      </ul>
      <div> 
     <Link to="/Carts" type="button" className="btn btn-dark btn-sm me-3 mt-1 position-relative">
      <span className='fa-solid fa-shopping-cart py-0'></span>
      <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle d-grid justify-item-center align-item-center " style={{height:"28px",width:"28px" }}>
          {Cart.length}
        
       <span className="visually-hidden">New alerts</span>
      </span>
      </Link>

      {login ? (<button className='btn btn-danger' onClick={logout}>logout</button>)
        :<LoginButton/>
      }
        </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar
