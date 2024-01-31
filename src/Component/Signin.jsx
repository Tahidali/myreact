import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cartApp } from '../App';

function Signin() {
   const [firstname,SetFirstname]= useState("")
   const [lastname,SetLastname]= useState("")
   const [email,setEmail]= useState("")
   const [pass,Setpass]= useState("")
   
   const {table,setTable}=useContext(cartApp)

   const [usersave,setUserSave]=useState([]);
   useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setTable(JSON.parse(data));
    }
  }, [setTable]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(table));
  }, [table]);

  function Sign(e) {
    e.preventDefault();
    var signValue = { firstname, lastname, email };
    setTable([...table, signValue]);
    SetFirstname('');
    SetLastname('');
    setEmail('');
    Setpass('');
  }

    return (
    <div className='container'>
        <div className="row py-4">
          <h2 className='offset-5'>Sign in</h2>
            <div className="col-md-5 offset-3 bg-light shadow p-5 rounded">
                <div className="inp mb-3">
                <input type="text" value={firstname} className='form-control' onChange={((e)=>SetFirstname(e.target.value))} placeholder='Enter Your First Name.....'/>
                </div>
                <div className="inp mb-3">
                <input type="text" value={lastname} className='form-control' onChange={((e)=>SetLastname(e.target.value))}placeholder='Enter Your Last Name.....'/>
                </div>
                <div className="inp mb-3">
                <input type="text" value={email} className='form-control' onChange={((e)=>setEmail(e.target.value))}placeholder='Enter Your Email.....'/>
                </div>
                <div className="inp mb-3 ">
                <input type="password" value={pass} className='form-control' onChange={((e)=>Setpass(e.target.value))}placeholder='Enter Your Password....'/>
                </div>
                <h5>Already a User ? <Link to="/Login">Login</Link></h5>
                <div className="bt text-center ">
                <button className='btn btn-primary w-100'onClick={Sign}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin;
