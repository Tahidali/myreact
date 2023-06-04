import React, { useContext } from 'react'
import Container from './Container'
import { AppDetail } from '../App'
import LoginButton from './LoginButton'

function Login() {
  const{setLogin}=useContext(AppDetail)
  return (
    <Container>
      <div className="row d-flex justify-content-center m-2 ">
        <div className="col-md-3 border border-warning shadow p-5  " style={{background:"skyblue"}}>
          <label htmlFor="FirstName" className='m-2'><u> FirstName</u></label>
          <input type="text "  className='form-control' />
        <div className="my-3">
        <label  htmlFor="Password"><u> Password </u></label>
          <input  type="password" className='form-control ' />
        </div>
        </div>
      </div>
      <LoginButton/>
    </Container>
  )
}

export default Login

