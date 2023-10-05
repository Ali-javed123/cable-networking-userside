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
       
          <h5 className='text-dark'>COMWAVE TV</h5>
          <h3  style={{fontSize:"30px"}} className='text-dark'>Using the Amazon Fire Stick to Watch <span className='section-title-inner '>Live TV</span>  at Home  </h3>
          {/* banner-two-info-detail */}
          <p className="banner-one-info .banner-one-info-detail  text-center text-dark">Select the TV package that includes all of your preferred channels. Watch through the ComwaveTV App on your Smart TV using the Amazon Fire Stick.
                     

                    
          </p>
      
          {/* banner-two-info-detail-two */}
       
          {/* banner-two-info-bottom */}
        
          {/* btn */}
        </div>
      </div>
      <div className="col-lg-6 col-md-3 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* banner-two-video-btn */}
          {/* video-one-btn-shape */}
        
          <img className='img-fluid' style={{backgroundSize:"cover",height:"70vh",width:"100%"}} src="assets/images/Internet-Devices.png" alt="" />
      </div>
    </div>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={'assets/images/Service-Page-Internet-main-Page-BG.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
           <div className="row">
            <div className="col-md-6">
          {/* section-title */}
         
          {/* section-main-title */}
          <div className="section-main-title " style={{marginBottom:"10%",marginTop:"20%"}}>
            <p style={{fontSize:"25px"}}>COMWAVE'S PRICE GUARANTED</p>
            <p className='mt-2' style={{fontSize:"20px"  }}>  

            Not to be tempted! The promise that Comwave will outbid any rival's offer is one of our greatest achievements. Indeed, ANY offer.</p>

<p className='mt-2 mb-3' style={{fontSize:"20px"  }}>  

We've got you covered, so trust us.</p>
<a className='websiteLink ' style={{textDecoration:"none",marginTop:"10%",fontSize:"20px"}} href="tel:1-866-350-5656">1-866-350-5656</a>
            
          </div>
      
          {/* banner-one-btn */}
       
            </div>
            <div className="col-md-6" >
                <div >
                    <img style={{height:"70vh",width:"100%"}} src="assets/images/tv-1.png" alt="" />
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
