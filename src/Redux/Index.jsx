import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './ProfileSlice'

function Index() {
 var  {name,address,add}=useSelector((state)=>(state.Profile))
 var dispatch=useDispatch()
  return (
    <div className='container'>
        <h1>hello Redux</h1>
        <h2>Name:{name}</h2>
        <h3>Address:{address}</h3>
        <h1>{add}</h1>
        <div>
          <button className='btn btn-primary' onClick={()=>dispatch(increment())}>+</button>
          <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>-</button>
        </div>

        
    </div>
  )
}

export default Index
