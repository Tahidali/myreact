import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/CartSlice'
import { AddressChange, ChangeDetail, ChangeImage } from './Redux/ProfileSlice'
import List from './Redux/List'
// import { ChangeImage} from "./Redux/CartSlice"


function App() {
  // console.log(increment)
  const { totalItem } = useSelector((state) => state.cart)
  const { name, address, image } = useSelector((state) => state.Profile)  
  const dispatch = useDispatch()
  // for payload
  const [formValue, setformValue] = useState(0)
  const [Username, setUsername] = useState("")
  const[Address,setAddress]=useState("")


  return (
    <div className='container py-2'>
      <h1 className='text-center text-dark'>Redux</h1>
      <List/>
      <h1 className='text-center'>{formValue}</h1>
      <input className='form-control ' value={formValue} onChange={(e) => setformValue(e.target.value)} />
      <h4>TotalItem:{totalItem}</h4>
      <button className='btn btn-primary' onClick={() => (dispatch(increment(formValue)))}>+</button>
      <button className='btn btn-danger ms-2 ' onClick={() => (dispatch(decrement(formValue)))}>-</button>
      <hr />
      <input value={Username} className='form-control' onChange={(e) => setUsername(e.target.value)} placeholder='Enter You Adding Name'/>

      <input value={Address} className='form-control' onChange={(e)=>setAddress(e.target.value)}/>
      <h2>Name:{name}</h2>
      <h4>address:{address}</h4>
      <button className='btn btn-success' onClick={(() => dispatch(ChangeDetail(Username)))}>Change</button>
      <button className='btn btn-warning ms-4' onClick={(() => dispatch(AddressChange(Address)))}>Change Address</button>
      
      <hr />
      <img src={image} style={{ height: "400px", width: "400px" }} className='py-2 mb-3' /> <br />
      <button className='btn btn-danger' onClick={() => dispatch(ChangeImage())}>ChangeImage</button>


    </div>
  )
}

export default App
