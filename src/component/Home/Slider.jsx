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
       
          <h5 className='text-dark'>COMWAVE INTERNET</h5>
          <h2  className='text-dark'>Acceleration Your Entire Home  With<span className='section-title-inner '>High-Speed Internet</span> </h2>
          {/* banner-two-info-detail */}
          <p className="banner-one-info .banner-one-info-detail  text-center text-dark"><i className='fa fa-check '/>High Speed Internet
          </p>
          <p className="banner-one-info .banner-one-info-detail  text-center text-dark"><i className='fa fa-check '/>Live Tv with News Sport & Reality Entertainment
          </p>
          <small>Starting as Low as</small>
          <h4><sup>$</sup> 42<sup>.95/month and No Contact</sup></h4>
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
            src={'assets/images/home-bg.png'}
            alt="First slide"
          />
          <Carousel.Caption>
           <div className="row">
            <div className="col-md-6">
          {/* section-title */}
         
          {/* section-main-title */}
          <div className="section-main-title " style={{marginBottom:"50%"}}>
            <p style={{fontSize:"25px"}}>Comwave internet</p>
            <h4 className='mt-2' style={{fontSize:"35px"}}>Acceleration Your Entire Home with<span className="section-main-title-primery">One Low Price  </span></h4>
            <p style={{fontSize:"20px"  }}>   With Comwave you can stream faster and download all you like with speeds up to 1 Gbps.</p>
            <ul>
              <li><i className='fa fa-check'/>Speeds up to 1 Gbps</li>
              <li><i className='fa fa-check'/>Unlimited data</li>

            </ul>
          </div>
      
          {/* banner-one-btn */}
       
            </div>
            <div className="col-md-6" >
                <div >
                    <img style={{height:"60vh",width:"100%"}} src="assets/images/Internet-Devices.png" alt="" />
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
