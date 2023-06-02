import React, { useContext } from 'react'
import {Courselist} from"../Courselist"
import{Link, useNavigate} from "react-router-dom"
import Container from '../Component/Container'
import { AppDetail } from '../App'
// import Container from '../Component/Container'

function Courses() {
    const{Cart,setCart,courseListdata,setCourseListdata}= useContext(AppDetail)
   
    function addtocart(item){
      const data=courseListdata.map((singleitem)=>{
      if(singleitem.item===item.id){
       return {...singleitem,cart:true}
      }else{
        return singleitem;
      }
      })
      setCourseListdata(data)
      setCart([...Cart,item])
    }
    
  return (
    <>
    <Container>
    <h3 className='text-center py-3'>Courses</h3>
    <div className="container">
     <div className="row">
        {
        courseListdata.map((item)=>{
            const{id,name,Price,desp,Cart}=item
        return <div className="col-md-4">
        <div className="card shadow">
            <div className="card-body">
              <h5>id:{item.id}</h5>
                <h3>name:{name}</h3>
                <h6>discription:{desp }</h6>
                <Link to={`/courses/${id}`} className='btn btn-primary w-15 me-2'>Price:{Price}</Link>
               {
                Cart ? null : (<button className='btn btn-info' onClick={()=>addtocart(item)}>AddToCart</button>)
               }
            </div>
        </div>
    </div>    
       })
        }
        
        </div>           
    </div>
    </Container>
    </>
  )
}

export default Courses
