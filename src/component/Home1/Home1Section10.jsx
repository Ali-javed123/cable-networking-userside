import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function Home1Section10() {
  return (
    <>
     <section className="featured-movies-two">
  {/* featured-movies-two-shape-1 */}
  <div className="featured-movies-two-shape-1" />
  <div className="container">
    {/* featured-movies-two-slider */}
    <Swiper  loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className=" owl-carousel owl-theme owl-loaded owl-drag">
      <SwiperSlide>

      <div className="row">
        <div className="col-lg-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          {/* featured-movies-two-video */}
          <div className="featured-movies-two-video">
            <img  style={{width:"100%",height:"75vh",borderRadius:"0px"}} src="assets/images/resources/featured-movies-two-img-1.jpg" alt="featured-movies-two-img-1" />
            {/* featured-movies-two-img-inner */}
            <div className="featured-movies-two-img-inner">
              <a  href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <div className="video-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
            {/* featured-movies-two-timer */}
            <ul className="featured-movies-two-timer">
              <li>
                <p><i className="fas fa-video" />2 hr 30 min</p>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />4.5
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          {/* featured-movies-two-info */}
          <div className="featured-movies-two-info">
            {/* section-title */}
            <div className="section-title">
              <i className="icon-two-icon" />
              <span>Movies &amp; Videos</span>
            </div>
            {/* section-main-title */}
            <div className="section-main-title">
              <h2>Explore Our <span className="section-title-inner">Featured</span> Movie &amp; TV
                Show</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corruptie quos dolores et quas
                molestias excepturi sinte</p>
            </div>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="row">
        <div className="col-lg-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          {/* featured-movies-two-video */}
          <div className="featured-movies-two-video">
            <img style={{width:"100%",height:"75vh",borderRadius:"0px"}} src="assets/images/resources/featured-movies-two-img-1.jpg" alt="featured-movies-two-img-1" />
            {/* featured-movies-two-img-inner */}
            <div className="featured-movies-two-img-inner">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                {/* video-play-btn */}
                <div className="video-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
            {/* featured-movies-two-timer */}
            <ul className="featured-movies-two-timer">
              <li>
                <p><i className="fas fa-video" />2 hr 30 min</p>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />4.5
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          {/* featured-movies-two-info */}
          <div className="featured-movies-two-info">
            {/* section-title */}
            <div className="section-title">
              <i className="icon-two-icon" />
              <span>Movies &amp; Videos</span>
            </div>
            {/* section-main-title */}
            <div className="section-main-title">
              <h2>Explore Our <span className="section-title-inner">Featured</span> Movie &amp; TV
                Show</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corruptie quos dolores et quas
                molestias excepturi sinte</p>
            </div>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperButtun />
    </Swiper>
  </div>
</section>

    </>
  )
}
