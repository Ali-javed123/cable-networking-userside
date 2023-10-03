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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className=" ">
      {/* movies-video-one-info */}
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-1.jpg" alt="movies-two-one-img-1" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="flaticon-gun" />
            <span>Action Movie</span>
          </div>
          <h6>New Action Hindi Movie Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-2.jpg" alt="movies-two-one-img-2" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="flaticon-ghost" />
            <span>Horror Movie</span>
          </div>
          <h6>Horror English Movie Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-3.jpg" alt="movies-two-one-img-3" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="flaticon-love" />
            <span>Romantic Movie</span>
          </div>
          <h6>New Romantic Movies Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        {/* card-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-4.jpg" alt="movies-two-one-img-4" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="icon-Black" />
            <span>Cartoon Movie</span>
          </div>
          <h6>New Action Hindi Movie Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-1.jpg" alt="movies-two-one-img-1" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="flaticon-gun" />
            <span>Action Movie</span>
          </div>
          <h6>New Action Hindi Movie Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="500ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-2.jpg" alt="movies-two-one-img-2" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="flaticon-ghost" />
            <span>Horror Movie</span>
          </div>
          <h6>Horror English Movie Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-3.jpg" alt="movies-two-one-img-3" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="flaticon-love" />
            <span>Romantic Movie</span>
          </div>
          <h6>New Romantic Movies Trailer Watch - 2023</h6>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="movies-video-one-info wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="700ms">
        {/* movies-video-one-img */}
        <div className="movies-video-one-img">
          <img src="assets/images/resources/movies-two-one-img-4.jpg" alt="movies-two-one-img-4" />
          {/* movies-video-one-img-inner */}
          <div className="movies-video-one-img-inner">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              {/* video-play-btn */}
              <div className="video-play-btn">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* movies-video-one-title */}
        <div className="movies-video-one-title">
          <div className="d-flex">
            <i className="icon-Black" />
            <span>Cartoon Movie</span>
          </div>
          <h6>New Action Hindi Movie Trailer Watch - 2023</h6>
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
