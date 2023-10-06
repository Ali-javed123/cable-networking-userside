import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function Home1Section2() {
  return (
    <>
    			{/* movies-video-one */}
<section className="movies-video-one">
  {/* movies-video-one-shape-1 */}
  <div className="movies-video-one-shape-1" />
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-two-icon" />
      <span>Most watched movies</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2 className="mx-auto">Explore Our <span className="section-title-inner">Popular Trailer</span></h2>
    </div>
    {/* movies-video-one owl-carousel */}
    <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className=" ">
      {/* movies-video-one-info */}
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img width={"100%"} src="assets/images/live1.png" alt="movies-two-one-img-1" />
          {/* movies-video-one-img-inner */}
          {/* <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div> */}
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            {/* <i className="flaticon-gun" /> */}
            <span>Look Back</span>
          </div>
          <h6>Watch the programs that have already aired that you missed. You only need to click and scroll backward in the TV Guide to start watching.</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/live3.png" alt="movies-two-one-img-2" />
          {/* movies-video-one-img-inner */}
          {/* <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div> */}
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            {/* <i className="flaticon-ghost" /> */}
            <span>Restart</span>
          </div>
          <h6>You're watching a show late. Just click Restart to start over and watch.</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/live2.png" alt="movies-two-one-img-3" />
          {/* movies-video-one-img-inner */}
          {/* <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div> */}
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            {/* <i className="flaticon-love" /> */}
            <span>Pause & Resume</span>
          </div>
          <h6>When you're ready to pick up where you left off, pause live programming and resume when you're ready.</h6>
        </div>
      </div>
      </SwiperSlide>
     
      <SwiperButtun/>
      {/* movies-video-one-info */}
      {/* movies-video-one-info */}
      {/* movies-video-one-info */}
      {/* movies-video-one-info */}
      {/* movies-video-one-info */}
      {/* movies-video-one-info */}
      {/* movies-video-one-info */}
    </Swiper>
  </div>
</section>
{/* category-two */}

      
    </>
  )
}
