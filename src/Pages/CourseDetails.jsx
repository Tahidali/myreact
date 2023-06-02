import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Courselist } from '../Courselist';

    function CourseDetails(){
        const param = useParams();
        const[CourseDetails,setCourseDetails]=useState({})
        useEffect(()=>{
            const findValue= Courselist.find((item)=>item.id ==param.id);
            setCourseDetails(findValue);
        },[])
      function popup(){
        alert("Sorry Pay Your Fee.......")
      }
const navigate=useNavigate()
  return (
    <>
    <div className="conatiner p-5">
      <Link onClick={()=>navigate(-1)} className='btn btn-danger' > back</Link>
        <div className="row">
          <div className="col-md-4">
        <div className="card shadow">
            <div className="card-body">
              <h5>couse details:{param.id}</h5>
                <h3>name:{CourseDetails.name}</h3>
                <h6>discription:{CourseDetails.desp }</h6>
                <Link onClick={popup} className='btn btn-primary w-50'>Price:{CourseDetails.Price}</Link>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default CourseDetails
