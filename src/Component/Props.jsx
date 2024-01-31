import React from 'react'

function Props(props) {
  var {setnum,num}=props

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-4">
        <button className='btn btn-primary' onClick={()=>setnum(num+1)}>+</button>
        </div>
        <div className="col-md-4">
           <h1>Number:-{num}</h1> 
        </div>
        <div className="col-md-4">
        <button className='btn btn-danger' onClick={()=>setnum(num-1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Props
