import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


function Home() {
  return (
   <>
      <h1> i am Home</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://images.pexels.com/photos/3254563/pexels-photo-3254563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/351391/pexels-photo-351391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  " alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/1666011/pexels-photo-1666011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src=" https://images.pexels.com/photos/1530220/pexels-photo-1530220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
      </Swiper>
      </>
  )
}

export default Home
