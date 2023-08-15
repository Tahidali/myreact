import React, { useState } from 'react'

function Callback({getcolor}) {
    const [active,setActive]=useState(null)
    const onchange=(e)=>{
        const {value}=e.target;
        setActive(value)
        getcolor(value)
    }

  return (
    <div className='col-md-6 py-4'>
      <input type="text" value={active} onChange={onchange}  className='form-control' placeholder='write a color'/>
    </div>
  )
}

export default Callback
