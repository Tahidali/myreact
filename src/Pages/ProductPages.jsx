import React from 'react'
import Productimg from "../images/Shoping1.png"
import { useNavigate } from 'react-router-dom'

function ProductPages() {
    const navigate =useNavigate()
  return (
    <div className="Product-bg py-5">
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <div className="Product-img">
                    <img src={Productimg} alt="" className='img-fluid w-100' />
                </div>
            </div>
                <div className="col-md-6 py-5 bg-dark">
                <div className="Product-Contant ">
                    <h4 className='text-center'><i>We Have Best Of Your Family <hr className='text-light' /></i></h4>
                    <h6 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vero ex molestiae amet quam quo optio qui obcaecati dicta harum. Consequatur est illum, magnam ea inventore tenetur repellat? Aspernatur, itaque.
                        <br />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, quisquam saepe perspiciatis inventore nihil reiciendis velit quas soluta facere ducimus rem maiores ab ipsum expedita fugit nobis impedit quia harum.
                    </h6>
                   <b>Please Visit Here:-----</b>
                    <button className='btn btn-outline-primary' onClick={()=>navigate("/Products")} >Buy Now</button>
                </div>
                </div>
        </div>
      
    </div>
    </div>
  )
}

export default ProductPages
