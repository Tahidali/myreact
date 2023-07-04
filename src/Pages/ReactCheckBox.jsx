import React, { useState } from 'react'

function ReactCheckBox() {
    const [age,setAge]=useState("")
    const [boy,setBoy]=useState("")
  
  return (
    <div className="conatiner">
        <div className="row text-center">
            <div className=" col-md-12 ">
        <h1>Are You Citizen: <span className='text-danger'>{age} </span></h1>
        <h1>Are You Over 21: <span className='text-danger'>{boy} </span></h1>
        <form action="" className='py-2'>
        <label htmlFor="">Are You Citizen?
        </label>
        <input type="checkbox" onChange={()=>setAge(" Yes")} className='ms-2 '/>
        <br />
        <label htmlFor="">Are You Over 21?
        </label>
        <input type="checkbox"  onChange={()=>setBoy("No")} className='ms-2'/>
        </form>
        </div>
        </div>
    </div>
  )
}

export default ReactCheckBox
