import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function Home4Section10() {
  return (
    <>
<section className="testimonial-four">
  <div className="testimonial-four-shape-1" />
  <div className="testimonial-four-shape-2">
    <img src="assets/images/shapes/testimonial-four-shape-img-2.png" alt="testimonial-four-shape-img-2" />
  </div>
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-main-icon" />
      <span>Clients Feedback</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2 className="mx-auto">What <span className="section-main-title-primery">Clients Say </span>
        Us</h2>
    </div>
    {/* testimonial-four-tabs */}
    <div className="testimonial-four-tabs">
      {/* owl-carousel */}
      <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }} loop   modules={[Autoplay,Navigation]} className="">
        {/* testimonial-four-info */}
        {/* owl-carousel owl-theme */}
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>Sed ut perspiciatis unde omnis estesye natus error site voluptatem accusantium
              doloremque laudan totams aperias <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-1.png" alt="testimonial-four-img-1" />
            </li>
            <li>
              <h6>Dennis A. McGehee</h6>
              <p>Web Developer</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        
        {/* testimonial-four-info */}
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>At vero eos et accusamus dignissimos ducimus qui blanditiis praes voluptatum
              deleniti atque corrupti dolores <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-2.png" alt="testimonial-four-img-2" />
            </li>
            <li>
              <h6>Frank L. Hughes</h6>
              <p>Business Man</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>On the other hand’s denounce with righteous indignation and dislike men who are
              so beguiled and demoraliz <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-3.png" alt="testimonial-four-img-3" />
            </li>
            <li>
              <h6>Michael A. Olson</h6>
              <p>Consultant</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="400ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>Sed ut perspiciatis unde omnis estesye natus error site voluptatem accusantium
              doloremque laudan totams aperias <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-1.png" alt="testimonial-four-img-1" />
            </li>
            <li>
              <h6>Dennis A. McGehee</h6>
              <p>Web Developer</p>
            </li>
          </ul>
        </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>At vero eos et accusamus dignissimos ducimus qui blanditiis praes voluptatum
              deleniti atque corrupti dolores <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-2.png" alt="testimonial-four-img-2" />
            </li>
            <li>
              <h6>Frank L. Hughes</h6>
              <p>Business Man</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="600ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>On the other hand’s denounce with righteous indignation and dislike men who are
              so beguiled and demoraliz <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-3.png" alt="testimonial-four-img-3" />
            </li>
            <li>
              <h6>Michael A. Olson</h6>
              <p>Consultant</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="700ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>Sed ut perspiciatis unde omnis estesye natus error site voluptatem accusantium
              doloremque laudan totams aperias <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-1.png" alt="testimonial-four-img-1" />
            </li>
            <li>
              <h6>Dennis A. McGehee</h6>
              <p>Web Developer</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="800ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>At vero eos et accusamus dignissimos ducimus qui blanditiis praes voluptatum
              deleniti atque corrupti dolores <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-2.png" alt="testimonial-four-img-2" />
            </li>
            <li>
              <h6>Frank L. Hughes</h6>
              <p>Business Man</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="900ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>On the other hand’s denounce with righteous indignation and dislike men who are
              so beguiled and demoraliz <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-3.png" alt="testimonial-four-img-3" />
            </li>
            <li>
              <h6>Michael A. Olson</h6>
              <p>Consultant</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="1000ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>Sed ut perspiciatis unde omnis estesye natus error site voluptatem accusantium
              doloremque laudan totams aperias <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-1.png" alt="testimonial-four-img-1" />
            </li>
            <li>
              <h6>Dennis A. McGehee</h6>
              <p>Web Developer</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="1100ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>At vero eos et accusamus dignissimos ducimus qui blanditiis praes voluptatum
              deleniti atque corrupti dolores <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-2.png" alt="testimonial-four-img-1" />
            </li>
            <li>
              <h6>Frank L. Hughes</h6>
              <p>Business Man</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="testimonial-four-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="1200ms">
          <div className="testimonial-four-info-shape-1">
            <svg viewBox="0 0 370 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 18.1673C103.9 -8.82434 29.1667 11.8233 0 25.5209V93H370V0C327.5 17.3023 227.1 45.1589 165.5 18.1673Z" fill="#FF1749" />
            </svg>
          </div>
          <div className="testimonial-four-info-shape-2">
            <svg viewBox="0 0 370 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.5 19.5347C103.9 -9.48853 29.1667 12.7132 0 27.4419V100H370V0C327.5 18.6046 227.1 48.558 165.5 19.5347Z" fill="#0F0F0F" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="testimonial-four-ratting">
            <i className="flaticon-quote" />
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* testimonial-four-detais */}
          <div className="testimonial-four-detais">
            <p>On the other hand’s denounce with righteous indignation and dislike men who are
              so beguiled and demoraliz <span className="icon-qoute-left" /></p>
          </div>
          {/* testimonial-four-name */}
          <ul className="testimonial-four-img">
            <li>
              <img src="assets/images/resources/testimonial-four-img-3.png" alt="testimonial-four-img-1" />
            </li>
            <li>
              <h6>Michael A. Olson</h6>
              <p>Consultant</p>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperButtun/>
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
        {/* testimonial-four-info */}
      </Swiper>
    </div>
  </div>
</section>

      
    </>
  )
}
