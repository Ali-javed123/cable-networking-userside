import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function MovieSection5() {
  return (
    <>
<section className="comingsoon-popular-movie-six">
  <div className="container">
    {/* comingsoon-popular-movie-six-top */}
    <div className="comingsoon-popular-movie-six-top">
      {/* section-title */}
      <div className="section-title">
        <i className="icon-main-icon" />
        <span>Popular Movies</span>
      </div>
      {/* section-main-title */}
      <div className="section-main-title">
        <h2>Upcoming Movies Trailer</h2>
      </div>
    </div>
    {/* comingsoon-popular-movie-six-slider */}
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
        }} loop   modules={[Autoplay,Navigation]} className=" ">
      {/* comingsoon-popular-movie-six-box */}
      <SwiperSlide className="comingsoon-popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* comingsoon-popular-movie-six-img */}
        <div className="comingsoon-popular-movie-six-img">
          <img src="assets/images/resources/comingsoon-popular-movie-img-1.jpg" alt="comingsoon-popular-movie-img-1" />
          {/* comingsoon-popular-movie-six-img-inner */}
          <div className="comingsoon-popular-movie-six-img-inner">
            <div className="comingsoon-popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="comingsoon-popular-movie-six-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* comingsoon-popular-movie-six-title */}
        <div className="comingsoon-popular-movie-six-title">
          <h6>
            <a href="#">
              The Spiderman War
            </a>
          </h6>
          <h6>1995</h6>
        </div>
        {/* comingsoon-popular-movie-six-text */}
        <ul className="comingsoon-popular-movie-six-text">
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
      </SwiperSlide>
      {/* comingsoon-popular-movie-six-box */}
      <SwiperSlide className="comingsoon-popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="250ms">
        {/* comingsoon-popular-movie-six-img */}
        <div className="comingsoon-popular-movie-six-img">
          <img src="assets/images/resources/comingsoon-popular-movie-img-2.jpg" alt="comingsoon-popular-movie-img-2" />
          {/* comingsoon-popular-movie-six-img-inner */}
          <div className="comingsoon-popular-movie-six-img-inner">
            <div className="comingsoon-popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="comingsoon-popular-movie-six-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* comingsoon-popular-movie-six-title */}
        <div className="comingsoon-popular-movie-six-title">
          <h6>
            <a href="#">The Spiderman War</a>
          </h6>
          <h6>1995</h6>
        </div>
        {/* comingsoon-popular-movie-six-text */}
        <ul className="comingsoon-popular-movie-six-text">
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
      </SwiperSlide>
      {/* comingsoon-popular-movie-six-box */}
      <SwiperSlide className="comingsoon-popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
        {/* comingsoon-popular-movie-six-img */}
        <div className="comingsoon-popular-movie-six-img">
          <img src="assets/images/resources/comingsoon-popular-movie-img-3.jpg" alt="comingsoon-popular-movie-img-3" />
          {/* comingsoon-popular-movie-six-img-inner */}
          <div className="comingsoon-popular-movie-six-img-inner">
            <div className="comingsoon-popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="comingsoon-popular-movie-six-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* comingsoon-popular-movie-six-title */}
        <div className="comingsoon-popular-movie-six-title">
          <h6>
            <a href="#">
              The Spiderman War
            </a>
          </h6>
          <h6>1995</h6>
        </div>
        {/* comingsoon-popular-movie-six-text */}
        <ul className="comingsoon-popular-movie-six-text">
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
      </SwiperSlide>
      {/* comingsoon-popular-movie-six-box */}
      <SwiperSlide className="comingsoon-popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="550ms">
        {/* comingsoon-popular-movie-six-img */}
        <div className="comingsoon-popular-movie-six-img">
          <img src="assets/images/resources/comingsoon-popular-movie-img-4.jpg" alt="comingsoon-popular-movie-img-4" />
          {/* comingsoon-popular-movie-six-img-inner */}
          <div className="comingsoon-popular-movie-six-img-inner">
            <div className="comingsoon-popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="comingsoon-popular-movie-six-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* comingsoon-popular-movie-six-title */}
        <div className="comingsoon-popular-movie-six-title">
          <h6>
            <a href="#">
              The Spiderman War
            </a>
          </h6>
          <h6>1995</h6>
        </div>
        {/* comingsoon-popular-movie-six-text */}
        <ul className="comingsoon-popular-movie-six-text">
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
      </SwiperSlide>
      {/* comingsoon-popular-movie-six-box */}
      <SwiperSlide className="comingsoon-popular-movie-six-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="700ms">
        {/* comingsoon-popular-movie-six-img */}
        <div className="comingsoon-popular-movie-six-img">
          <img src="assets/images/resources/comingsoon-popular-movie-img-2.jpg" alt="comingsoon-popular-movie-img-2" />
          {/* comingsoon-popular-movie-six-img-inner */}
          <div className="comingsoon-popular-movie-six-img-inner">
            <div className="comingsoon-popular-movie-six-img-inner-link">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="comingsoon-popular-movie-six-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* comingsoon-popular-movie-six-title */}
        <div className="comingsoon-popular-movie-six-title">
          <h6>
            <a href="#">The Spiderman War</a>
          </h6>
          <h6>1995</h6>
        </div>
        {/* comingsoon-popular-movie-six-text */}
        <ul className="comingsoon-popular-movie-six-text">
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
      </SwiperSlide>
      <SwiperButtun/>
    </Swiper>
  </div>
</section>

    
    </>
  )
}
