import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun }  from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
import Modal from 'react-bootstrap/Modal';

export default function HomeSection15() {
  return (
    <>
    <section>
        <div className="container">
            <p>Sepciality Packages</p>
            <span>Choose from a variety of packages to get the best value.</span>
            <Swiper navigation={true} pagination={true} breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className=" ">
          
          
          <SwiperSlide>

      <div className="card">
        <div className="card-body">
            
        </div>
      </div>
          </SwiperSlide>
        {/* pricing-package-one-box */}

            </Swiper>  
        </div>
    </section>
    </>
  )
}
