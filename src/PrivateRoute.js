import React, { useEffect } from 'react'
import Item_Login from './Pages/Item_Login'
import { useNavigate } from 'react-router-dom'

function PrivateRoute(props) {
  // const {component} = props
  let navigate=useNavigate()

  // useEffect(()=>{
  //   let login=localStorage.getItem("login")
  //   if(!login){
  //     navigate("/item_login")
  //   }
  // },[])
  
  return (
    <div>
      <h3>PrivateRoute</h3>
      <Item_Login/>
    </div>
  )
}

export default PrivateRoute
