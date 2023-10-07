import React,{useState} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      console.log('selected index: ', selectedIndex)
      setIndex(selectedIndex);
    };
  return (
    <>
    <section>
    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{background:'url(assets/images/movies/featured-movies-two-img-1.jpg)',height:"100vh",width:'100%',marginTop:'0px',top:"0px",backgroundSize:'cover'}}>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
    <Carousel activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
    >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={'assets/images/home-bg.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="row align-items-center">
      <div className="col-lg-6 col-md-9 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* banner-two-info */}
        <div className="banner-two-info">
          {/* banner-two-info-top */}
       
          <h5 className='text-dark'>COMWAVE Bundles</h5>
          <h3  style={{fontSize:"40px"}} className='text-dark'>Choose From Any <span className='section-title-inner '>Internet & TV Plan</span>    </h3>
          {/* banner-two-info-detail */}
          <p className="banner-one-info .banner-one-info-detail  text-center text-dark">

Combine any Comwave Internet and TV plan together into a bundle that keeps you connected for less.
                     

                    
          </p>
      
          {/* banner-two-info-detail-two */}
       
          {/* banner-two-info-bottom */}
        
          {/* btn */}
        </div>
      </div>
      <div className="col-lg-6 col-md-3 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* banner-two-video-btn */}
          {/* video-one-btn-shape */}
        
          <img className='img-fluid' width={"100%"} style={{backgroundSize:"cover",height:"70vh",width:"100%"}} src="assets/images/bundles-1.png" alt="" />
      </div>
    </div>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={'assets/images/home-bg.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="row">
            <div className="col-md-6">
          {/* section-title */}
         
          {/* section-main-title */}
          <div className="section-main-title " style={{marginBottom:"2%"}}>
            <p style={{fontSize:"25px"}}>THE PRICE GUARANTEE OF COMWAVE</p>
            <h4 className='mt-2' style={{fontSize:"35px"}}>Are you receiving switch requests from other <span className="section-main-title-primery"> businesses?</span></h4>
            <p style={{fontSize:"20px"  }}>   

            Not to be tempted! The promise that Comwave will outbid any rival's offer is one of our greatest achievements. Exactly, ANY offer. </p>
            <p className='mt-2' style={{fontSize:"20px"  }}>   

            We've got you covered, so trust us.</p>    
            <span className="section-main-title-primery" style={{fontSize:"20px" }}>Contact Comwave's Price Guarantee Hotline Right Away!</span><br/>
            <a className='mt-2' href="tel:1-866-350-5656"  style={{fontSize:"20px",textDecoration:"none" }}>1-866-350-5656</a>
            
          </div>
      
          {/* banner-one-btn */}
       
            </div>
            <div className="col-md-6" >
                <div >
                    <img style={{height:"60vh",width:"100%"}} src="assets/images/internt-2.png" alt="" />
                </div>
            </div>
           </div>    
          </Carousel.Caption>
        </Carousel.Item>        
    </Carousel>
    </section>
      
    </>
  )
}
