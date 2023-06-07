import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddFriend } from './ListSlice'

function List() {
    const [nameValue,setnameValue]=useState("")
     const {Listdata}= useSelector((state)=>state.list)
    const dispatch=useDispatch()
    function Handler(){
       dispatch(AddFriend(nameValue))
       setnameValue("")
    }
  return (
    <>
    <input value={nameValue} className='form-control mb-3' onChange={(e)=>setnameValue(e.target.value)} type="text" />
    <button className='btn btn-info' onClick={Handler}>Add</button>
    {
    Listdata.length === 0 && <h5 className='text-secondary'>No Data</h5>
    }
    {
      Listdata.map((item,index)=>{
        return <h1 key={index}>{item}</h1>
      })
    }
  </>
  )
}

export default List
