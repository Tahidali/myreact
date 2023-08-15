import React, { useState } from 'react'
import Callback from './Callback'

function BackgoundSet() {
    const [uicolor,setUicolor]=useState(null)
    const getcolor=(color)=>{
        setUicolor(color)
    }
  return (
    <div className='container'>
      <div className="col-md-6 offset-4 py-5">
        <div className="ui" style={{background:`${uicolor}`}}></div>
        <Callback getcolor={getcolor}/>
      </div>
    </div>
  )
}

export default BackgoundSet
