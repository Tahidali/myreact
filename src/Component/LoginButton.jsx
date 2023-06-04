import React, { useContext } from 'react'
import { AppDetail } from '../App'
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const{login,setLogin}=useContext(AppDetail)
    const navigate = useNavigate();

    function userLogin() {
      setLogin(true);
      localStorage.setItem("Login", "true");
      // you have this code here!
      navigate("/Courses");
    }
  

  return ( <>
  <button className='btn btn-success' onClick={userLogin}>login</button>

  </>
  )
}

export default LoginButton
