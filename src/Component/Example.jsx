import React, { useMemo, useState } from 'react'

function Example() {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(0)
   
    const isEven=useMemo(()=>{
      calculateEven()
    },[number])
    function calculateEven(){
      for(let i=0;i<10;i++){
        console.log("hello")
      }
        if(number % 2 ===0){
            return true
        }else{
            return false
        }
    }
    return (
    <div className='container'>
        <h2>{number}</h2>
        {
              isEven?<h6 className='text-danger'>This is even number</h6>:<h6>This is Odd Number</h6>
        }
        <button onClick={()=>calculateEven(setNumber(number+1))}>Check</button>
        <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}

export default Example
