import React, { useContext } from 'react'
import { AppDetail } from '../App'

function LoginButton() {
  const{login,setLogin}=useContext(AppDetail)
  return ( <div className='container py-4 mt-5 shadow bg-dark text-light fs-5  '  style={{border:"none",borderTopLeftRadius:"140px",borderBottomRightRadius:"140px",backgroundColor:'ButtonShadow'}}>
      <h1>Login Form</h1>
      <form action="" className='py-3 '>
        <div className="col-md-3 w-100 mb-3">
          <label htmlFor="">
            FirstName:
          </label>
          <input type="text" className='w-25 p-1' style={{borderRadius:"10px"}}/>
        </div> 
        <div className="col-md-3 w-100">
          <label htmlFor="">
            PassWord :
          </label>
          <input type="password"  className='w-25 p-1'style={{borderRadius:"10px"}} />
        </div>
        </form>
      <button className='btn btn-primary ' onClick={()=>setLogin(true)}>login</button>

    </div>
  )
}

export default LoginButton
