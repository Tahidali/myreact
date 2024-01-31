import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Item_Login() {
  var [Email,setEmail] = useState()
  var [pass,setPass] =useState()
  var [showPass,setshowPass]=useState(false)
    var navigate=useNavigate()
    var {iDrink}=useParams()
    
    function showPassword(){
    setshowPass(!showPass)
  }
  function login(){
    localStorage.setItem("login",true)
    navigate(`/tail/${iDrink}`);
  }
  useEffect(()=>{
    let login=localStorage.getItem("login")
    if(login){
      console.log(navigate(`/tail/${iDrink}`));
    }
  },[])
   

  function viewdata(e){
    e.preventDefault();
    // navigate(`/cocktail/${iDrink}`)
    navigate(-1)
    
  }
  return (
    <div className="container">
    <div className="row py-4">
      <h2 className="offset-5">Login</h2>
      <div className="col-md-5 offset-3 bg-light shadow p-5 rounded">
        <div className="inp mb-3">
          <input
            type="text"
            value={Email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your email....."
          />
        </div>
        <div className="inp mb-3 input-group">
          <input
            type={showPass ? "text" : "password"}
            value={pass}
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Your Password...."
          />
          <span
            className={`fa-solid fa-eye${showPass ? "-slash" : ""} py-2`}
            onClick={showPassword}
          ></span>
        </div>
        <div className="bt text-center ">
        <Link onClick={login}  className="btn btn-primary w-100" >
              Login
            </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Item_Login
