import React from 'react'
import {Courselist} from"../Courselist"
import{Link} from "react-router-dom"
function Courses() {
  return (
    <>
    <h3 className='text-center py-3'>Courses</h3>
    <div className="container">
     <div className="row">
        {
        Courselist.map((item)=>{
            const{id,name,Price,desp}=item
        return <div className="col-md-4">
        <div className="card shadow">
            <div className="card-body">
              <h5>id:{item.id}</h5>
                <h3>name:{item.name}</h3>
                <h6>discription:{item.desp }</h6>
                <Link to={`/courses/${id}`} className='btn btn-primary w-50'>Price:{item.Price}</Link>
            </div>
        </div>
    </div>    
       })
        }
        
        </div>           
    </div>
    </>
  )
}

export default Courses
