import React from 'react'
import { Link } from 'react-router-dom'
import CourseDetails from '../Pages/CourseDetails';

function Navbar() {

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
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar
