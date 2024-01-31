import React, { useEffect, useState } from 'react'

function Math() {
    var [first,setfirst]=useState(0)
    var [second,setsecond]=useState(0)
    var [total,settotal]=useState()

    function Add(e){
        e.preventDefault()
    var x= parseFloat(first)
        var y=parseFloat(second)
        var z=(x+y)
        settotal(z)
    }
    function subtraction(e){
        e.preventDefault()
    var x= parseFloat(first)
        var y=parseFloat(second)
        var z=(x-y)
        settotal(z)
    }
    function multiply(e){
        e.preventDefault()
    var x= parseFloat(first)
        var y=parseFloat(second)
        var z=(x*y)
        settotal(z)
    }
    function divide(e){
        e.preventDefault()
    var x= parseFloat(first)
        var y=parseFloat(second)
        var z=(x/y)
        settotal(z)
    }

    function remove(e){
        e.preventDefault()
    setfirst(0)
    setsecond(0)
    settotal(0)
    }
    
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-md-4">
                <input type="number" value={first}  onChange={((e)=>setfirst(e.target.value))} className='form-control' />
            </div> 
            <div className="col-md-4">
            <input type="number" className='form-control' onChange={((e)=>setsecond(e.target.value))} value={second} />
            </div>
            <div className="col-md-4 pb-2">
                <div className=''>
            <span className='pe-2'>total={total}</span>
                <button className='btn btn-success' onClick={remove}>Clear</button>
                </div>
            </div>
            <div className="col-md-3">
                <button className='btn btn-primary' onClick={Add}>+</button>
            </div>
            <div className="col-md-3">
                <button className='btn btn-warning' onClick={subtraction}>-</button>
            </div>
            <div className="col-md-3">
                <button className='btn btn-info'onClick={multiply}>*</button>
            </div>
            <div className="col-md-3">
                <button className='btn btn-dark'onClick={divide}>Divide</button>
            </div>
        </div>
    </div>
  )
}

export default Math
