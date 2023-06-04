import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppDetail } from '../App'
import Container from './Container';
import Login from './Login';

function PrivateRoute({children}) {
  const {login}=useContext(AppDetail)
  if(login){
    return children;
  }
  return <Container>
   <Login/>
  </Container>
}
export default PrivateRoute