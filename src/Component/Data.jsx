import React, { useState } from 'react'

function Data({data}) { 
    const[search,setsearch]=useState("")
    const filterdata=data.filter((item)=>{
        return item.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <div className='container py-4'>
      <div className="col-md-4 offset-4">
        <h5>Search your Products......</h5>
        <input type="text" className='form-control' value={search} onChange={(e)=>setsearch(e.target.value)} />
        {filterdata.map((item,index)=>{
            return <h3 key={index}>{item}</h3>
        })}
      </div>
    </div>
  )
}

export default Data
