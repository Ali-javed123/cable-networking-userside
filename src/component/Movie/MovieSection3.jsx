import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function MovieSection3() {
  return (
    <>
    
<section className="popular-movie-six">
  <div className="container">
    {/* popular-movie-six-top */}
    <div className="popular-movie-six-top">
      {/* section-title */}
      <div className="section-title">
        <i className="icon-main-icon" />
        <span>Popular Movies</span>
      </div>
      {/* section-main-title */}
      <div className="section-main-title">
        <h2>Explore Web Series</h2>
      </div>
    </div>
    {/* movies-six-slider */}
    <Swiper  breakpoints={{
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
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className="">
      {/* popular-movie-six-box */}
      {/* movies-six-slider */}
      <SwiperSlide>

      <div className="popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* popular-movie-six-img */}
        <div className="popular-movie-six-img">
          <img src="assets/images/resources/popular-movie-six-img-1.jpg" alt="popular-movie-six-img-1" />
          {/* popular-movie-six-img-inner */}
          <div className="popular-movie-six-img-inner">
            <div className="popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-play" />
                </div>
              </a>
              <a href="#">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-video-plus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* popular-movie-six-title */}
        <div className="popular-movie-six-title">
          <h6>
            <a href="#">
              Montreal Winter
            </a>
          </h6>
          <h6>2011</h6>
        </div>
        {/* popular-movie-six-text */}
        <ul className="popular-movie-six-text">
          <li>
            <a href="#" className>
              <i className="fas fa-star" />4.5
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment-dots" />35
            </a>
          </li>
        </ul>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        
      <div className="popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="250ms">
        {/* popular-movie-six-img */}
        <div className="popular-movie-six-img">
          <img src="assets/images/resources/popular-movie-four-img-2.jpg" alt="popular-movie-four-img-2" />
          {/* popular-movie-six-img-inner */}
          <div className="popular-movie-six-img-inner">
            <div className="popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-play" />
                </div>
              </a>
              <a href="#">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-video-plus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* popular-movie-six-title */}
        <div className="popular-movie-six-title">
          <h6>
            <a href="#">Washington DC</a>
          </h6>
          <h6>2015</h6>
        </div>
        {/* popular-movie-six-text */}
        <ul className="popular-movie-six-text">
          <li>
            <a href="#">
              <i className="fas fa-star" />4.8
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment-dots" />23
            </a>
          </li>
        </ul>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
        {/* popular-movie-six-img */}
        <div className="popular-movie-six-img">
          <img src="assets/images/resources/popular-movie-six-img-3.jpg" alt="popular-movie-six-img-3" />
          {/* popular-movie-six-img-inner */}
          <div className="popular-movie-six-img-inner">
            <div className="popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-play" />
                </div>
              </a>
              <a href="#">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-video-plus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* popular-movie-six-title */}
        <div className="popular-movie-six-title">
          <h6>
            <a href="#">
              Conservatives
            </a>
          </h6>
          <h6>2018</h6>
        </div>
        {/* popular-movie-six-text */}
        <ul className="popular-movie-six-text">
          <li>
            <a href="#">
              <i className="fas fa-star" />4.3
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment-dots" />18
            </a>
          </li>
        </ul>
      </div>

      </SwiperSlide>
      <SwiperSlide>

      <div className="popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="550ms">
        {/* popular-movie-six-img */}
        <div className="popular-movie-six-img">
          <img src="assets/images/resources/popular-movie-six-img-4.jpg" alt="popular-movie-six-img-4" />
          {/* popular-movie-six-img-inner */}
          <div className="popular-movie-six-img-inner">
            <div className="popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-play" />
                </div>
              </a>
              <a href="#">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-video-plus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* popular-movie-six-title */}
        <div className="popular-movie-six-title">
          <h6>
            <a href="#">
              Leave Your Films
            </a>
          </h6>
          <h6>1998</h6>
        </div>
        {/* popular-movie-six-text */}
        <ul className="popular-movie-six-text">
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment-dots" />35
            </a>
          </li>
        </ul>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="700ms">
        {/* popular-movie-six-img */}
        <div className="popular-movie-six-img">
          <img src="assets/images/resources/popular-movie-four-img-4.jpg" alt="popular-movie-four-img-4" />
          {/* popular-movie-six-img-inner */}
          <div className="popular-movie-six-img-inner">
            <div className="popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-play" />
                </div>
              </a>
              <a href="#">
                <div className="popular-movie-six-play-btn">
                  <i className="icon-video-plus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* popular-movie-six-title */}
        <div className="popular-movie-six-title">
          <h6>
            <a href="#">
              Leave Your Films
            </a>
          </h6>
          <h6>1998</h6>
        </div>
        {/* popular-movie-six-text */}
        <ul className="popular-movie-six-text">
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment-dots" />35
            </a>
          </li>
        </ul>
      </div>
      </SwiperSlide>
      <SwiperButtun/>
      {/* popular-movie-six-box */}
      {/* popular-movie-six-box */}
      {/* popular-movie-six-box */}
      {/* popular-movie-six-box */}
    </Swiper>
  </div>
</section>

    </>
  )
}
