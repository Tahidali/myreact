import React, { useState } from 'react'
function Changer() {
    var [item,setitem]=useState("")
    var [list,setlist]=useState([])
    function Add(e){
        e.preventDefault();
        var data={id:new Date().getTime(),item:item }
        setlist([...list,data])
        setitem("")
    }
  return (
    <div className='container py-4'>
        <div className="row">
            <div className="col-md-5">
                <div>
                    <input type="text" className='form-control' value={item} onChange={((e)=>setitem(e.target.value))}/>
                </div>
            </div>
            <div className="col-md-1">
                <button className='btn btn-danger' onClick={Add}>Click</button>
            </div>
            {list.length > 0 && (
            <div className="col-md-5 bg-warning  ">
                    {
                        list.map((i,index)=>{
                            const{item,id}=i
                            return <tr key={id}>
                            <td>{item}</td>
                </tr>
                        })
                    }
            </div>
            )}
        </div>  
    </div>
  )
}

export default Changer
