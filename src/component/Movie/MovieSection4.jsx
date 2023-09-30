import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function MovieSection4() {
  return (
    <>
<section className="popular-movie-video-six">
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
        <h2>Most Visited Movies</h2>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    {/* popular-movie-video-six-box */}
    {/* popular-movie-video-six-box */}
    <Swiper breakpoints={{
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
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]}  className=" ">
      {/* popular-movie-video-six-info */}

      <SwiperSlide className="popular-movie-video-six-box-video wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        <img src="assets/images/resources/movies-two-one-img-6.jpg" alt="movies-two-one-img-6" />
        <div className="popular-movie-video-six-box-shape" />
        {/* featured-movies-two-img-inner */}
        <div className="popular-movie-video-six-box-video-inner">
          <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
            {/* video-play-btn */}
            <div className="video-play-btn">
              <i className="fas fa-play" />
            </div>
          </a>
        </div>
        {/* featured-movies-two-timer */}
        <ul className="popular-movie-video-six-box-video-timer">
          <li>
            <p><i className="fas fa-video" />2 hr 30 min</p>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide className="popular-movie-video-six-box-video wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        <img src="assets/images/resources/movies-two-one-img-5.jpg" alt="movies-two-one-img-5" />
        <div className="popular-movie-video-six-box-shape" />
        {/* featured-movies-two-img-inner */}
        <div className="popular-movie-video-six-box-video-inner">
          <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
            {/* video-play-btn */}
            <div className="video-play-btn">
              <i className="fas fa-play" />
            </div>
          </a>
        </div>
        {/* featured-movies-two-timer */}
        <ul className="popular-movie-video-six-box-video-timer">
          <li>
            <p><i className="fas fa-video" />2 hr 30 min</p>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide className="popular-movie-video-six-box-video wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
        <img src="assets/images/resources/movies-two-one-img-4.jpg" alt="movies-two-one-img-4" />
        <div className="popular-movie-video-six-box-shape" />
        {/* featured-movies-two-img-inner */}
        <div className="popular-movie-video-six-box-video-inner">
          <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
            {/* video-play-btn */}
            <div className="video-play-btn">
              <i className="fas fa-play" />
            </div>
          </a>
        </div>
        {/* featured-movies-two-timer */}
        <ul className="popular-movie-video-six-box-video-timer">
          <li>
            <p><i className="fas fa-video" />2 hr 30 min</p>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide className="popular-movie-video-six-box-video wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="700ms">
        <img src="assets/images/resources/movies-two-one-img-3.jpg" alt="movies-two-one-img-3" />
        <div className="popular-movie-video-six-box-shape" />
        {/* featured-movies-two-img-inner */}
        <div className="popular-movie-video-six-box-video-inner">
          <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
            {/* video-play-btn */}
            <div className="video-play-btn">
              <i className="fas fa-play" />
            </div>
          </a>
        </div>
        {/* featured-movies-two-timer */}
        <ul className="popular-movie-video-six-box-video-timer">
          <li>
            <p><i className="fas fa-video" />2 hr 30 min</p>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide className="popular-movie-video-six-box-video wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        <img src="assets/images/resources/movies-two-one-img-6.jpg" alt="movies-two-one-img-6" />
        <div className="popular-movie-video-six-box-shape" />
        {/* featured-movies-two-img-inner */}
        <div className="popular-movie-video-six-box-video-inner">
          <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
            {/* video-play-btn */}
            <div className="video-play-btn">
              <i className="fas fa-play" />
            </div>
          </a>
        </div>
        {/* featured-movies-two-timer */}
        <ul className="popular-movie-video-six-box-video-timer">
          <li>
            <p><i className="fas fa-video" />2 hr 30 min</p>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star" />4.5
            </a>
          </li>
        </ul>
      </SwiperSlide>


      
      <SwiperButtun/>
      {/* popular-movie-video-six-box-video */}
      {/* popular-movie-video-six-box-video */}
      {/* popular-movie-video-six-box-video */}
    </Swiper>
  </div>
</section>

    
    </>
  )
}
