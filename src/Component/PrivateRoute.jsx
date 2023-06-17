import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute(children) {
  const {islogin}= useSelector((state)=>state.Auth)

  if(islogin){
    return children
  }
  return <Navigate to="/Login"/>
}

export default PrivateRoute
