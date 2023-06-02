import React from 'react'
import {useContext} from 'react'
import {AppDetail} from "../App.js"
import Container from "./Container"
import LoginButton from './LoginButton'

function PrivateRoute({children}) {
  const {login,setLogin}=useContext(AppDetail)
  
  if(login){
    return children ;
  }
  return (<Container>
          <LoginButton/>
        </Container>
  )
}

export default PrivateRoute
