import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import CocktailPages from '../Pages/CocktailPages'
import ProductPages from '../Pages/ProductPages'
import "swiper/css";
import "swiper/css/pagination";
import backgroundvideo from '../video/background.mp4'
import homeimage from '../images/home.jpeg'
import home2 from "../images/homepng.jpg"

// import required modules
import { Pagination } from "swiper";


function Home() {
  return (
   <>
      <div className="home">
      <video  autoplay='true' loop muted style={{width:"100%"}}>
      <source src={backgroundvideo} type='video/mp4'/>
      </video>
          <div className="home-containt container">
            <div className="row">
              <div className="col-md-6">
                <img src={homeimage} alt=""  className='img-fluid' style={{maxHeight:"250px",width:"30%",borderRadius:"50%"}}/>
                <img src={home2} alt=""  className='img-fluid' style={{maxHeight:"300px",width:"60%"}}/>
              </div>
              <div className="col-md-6">
            <div className="home-head">
              <h3 className='text-center py-2'><i>Lorem ipsum dolor sit amet consectetur </i></h3>
              <h5 className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque consectetur ipsum velit fugit voluptatem deserunt omnis, modi laborum asperiores ad. Placeat quasi possimus esse, repellat tempore optio enim sed.</h5>
             <h6> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem exercitationem a nesciunt minima, expedita commodi enim nemo, inventore mollitia doloremque vitae accusantium obcaecati vel dolorum! Nisi vitae eligendi pariatur nesciunt?
             </h6>
            <div className="btn d-flex justify-content-center">
              <button className='btn  btn-warning'>Click here</button>
            </div>
             </div>
             </div>
              </div>
          </div>
        </div>
     <CocktailPages/>
     <ProductPages/>


      </>
  )
}

export default Home
