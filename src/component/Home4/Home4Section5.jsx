import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function Home4Section5() {
  return (
    <>
<section className="package-four">
  <div className="package-four-shape-1" />
  <div className="package-four-shape-2" />
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-main-icon" />
      <span>Select Your Speed</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2 className="mx-auto">Find Your <span className="section-main-title-primery">Best Internet </span>
        array Package</h2>
    </div>
    {/* package-four-slider */}
    <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className=" owl-carousel owl-theme">
          <SwiperSlide>

      <div className="package-four-single wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* package-four-title */}
        <div className="package-four-title">
          <i className="icon-arrow-up-right-two" />
          <h3>Silver Plan</h3>
        </div>
        <h4><span>15 MBPS</span> Internet Package</h4>
        <p className="package-four-text">Sorem ipsum dolor sit amet consectetur. onsequat laoreet
          amet
          condimentum sit <span>vitaeulputate curabitur</span> vitae vestibulum
        </p>
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <ul className="list-item">
              <li>
                <i className="icon-right-arrow" />
                <p>Fast Streaming 1080 HD</p>
              </li>
              <li>
                <i className="icon-right-arrow" />
                <p>Music 1.07 min 120MB</p>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <ul className="list-item">
              <li>
                <i className="icon-right-arrow" />
                <p>Fast Streaming 1080 HD</p>
              </li>
              <li>
                <i className="icon-right-arrow" />
                <p>Music 1.07 min 120MB</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
          </SwiperSlide>
          <SwiperSlide>

      <div className="package-four-single wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        <div className="package-four-title">
          <i className="icon-arrow-up-right-two" />
          <h3>Silver Plan</h3>
        </div>
        <h4><span>45 MBPS</span> Internet Package</h4>
        <p className="package-four-text">Sorem ipsum dolor sit amet consectetur. onsequat laoreet
          amet
          condimentum sit <span>vitaeulputate curabitur</span> vitae vestibulum
        </p>
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <ul className="list-item">
              <li>
                <i className="icon-right-arrow" />
                <p>Fast Streaming 1080 HD</p>
              </li>
              <li>
                <i className="icon-right-arrow" />
                <p>Music 1.07 min 120MB</p>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <ul className="list-item">
              <li>
                <i className="icon-right-arrow" />
                <p>Fast Streaming 1080 HD</p>
              </li>
              <li>
                <i className="icon-right-arrow" />
                <p>Music 1.07 min 120MB</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
          </SwiperSlide>
          <SwiperSlide>

      <div className="package-four-single wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
        <div className="package-four-title">
          <i className="icon-arrow-up-right-two" />
          <h3>Silver Plan</h3>
        </div>
        <h4><span>12 MBPS</span> Internet Package</h4>
        <p className="package-four-text">Sorem ipsum dolor sit amet consectetur. onsequat laoreet
          amet
          condimentum sit <span>vitaeulputate curabitur</span> vitae vestibulum
        </p>
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <ul className="list-item">
              <li>
                <i className="icon-right-arrow" />
                <p>Fast Streaming 1080 HD</p>
              </li>
              <li>
                <i className="icon-right-arrow" />
                <p>Music 1.07 min 120MB</p>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <ul className="list-item">
              <li>
                <i className="icon-right-arrow" />
                <p>Fast Streaming 1080 HD</p>
              </li>
              <li>
                <i className="icon-right-arrow" />
                <p>Music 1.07 min 120MB</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
          </SwiperSlide>
          <SwiperButtun/>

      {/* package-four-single */}
      {/* package-four-single */}
    </Swiper>
  </div>
</section>

      
    </>
  )
}
