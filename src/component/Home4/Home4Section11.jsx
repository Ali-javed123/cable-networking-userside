import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun } from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
export default function Home4Section11() {
  return (
    <>
<section className="blog-four">
  {/* blog-four-shape-1 */}
  <div className="blog-four-shape-1">
    <img src="assets/images/shapes/blog-four-shape-img-2.png" alt="blog-four-shape-img-2" />
  </div>
  {/* blog-four-shape-2 */}
  <div className="blog-four-shape-2" />
  {/* blog-four-shape-3 */}
  <div className="blog-four-shape-3">
    <img src="assets/images/shapes/whychoose-three-shape-img-3.png" alt="whychoose-three-shape-img-3" />
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
        <div className="blog-four-info">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>News &amp; Blog</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Get Our Every Single Updates <span className="section-main-title-primery">News &amp;
                Articles</span></h2>
            <p>Sorem ipsum dolor sit amet consecteture Consequat laoreet amet neque vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
        {/* blog-four-slider */}
        <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }} loop   modules={[Autoplay,Navigation]} className=" owl-carousel owl-theme owl-loaded owl-drag">
          {/* blog-four-info */}
<SwiperSlide>

          <div className="blog-four-single wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/* blog-four-details */}
            <div className="blog-four-single-title">
              <div className="blog-four-title">
                <span>Movie</span>
              </div>
              <h4>
                <a href="#">
                  Meet Success The Smashing Book By Addy Osmanie
                </a>
              </h4>
            </div>
            {/* blog-four-img */}
            <div className="blog-four-img">
              <img src="assets/images/blog/blog-one-img-1.jpg" alt="blog-one-img-1" />
              {/* blog-four-img-inner */}
              <div className="blog-four-img-inner text-center">
                <span>25</span>
                <h6>July</h6>
              </div>
            </div>
            <ul>
              <li>
                <Link className="blog-single-name" to="#"><i className="icon-man" />Johnny M. Kolb</Link>
              </li>
              <li>
                {/* btn-read-more */}
                <Link to="#" className="btn-read-more">Read More</Link>
              </li>
            </ul>
          </div>
</SwiperSlide>
<SwiperSlide>

          <div className="blog-four-single wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            {/* blog-four-details */}
            <div className="blog-four-single-title">
              <div className="blog-four-title">
                <span>Internet</span>
              </div>
              <h4>
                <a href="#">
                  Practical Design Guidelines For Beginner Designers
                </a>
              </h4>
            </div>
            {/* blog-four-img */}
            <div className="blog-four-img">
              <img src="assets/images/blog/blog-one-img-2.jpg" alt="blog-one-img-2" />
              {/* blog-four-img-inner */}
              <div className="blog-four-img-inner text-center">
                <span>28</span>
                <h6>July</h6>
              </div>
            </div>
            <ul>
              <li>
                <Link className="blog-single-name" to="#"><i className="icon-man" />Harold C. Duncan</Link>
              </li>
              <li>
                {/* btn-read-more */}
                <Link to="#" className="btn-read-more">Read More</Link>
              </li>
            </ul>
          </div>
</SwiperSlide>
<SwiperSlide>

          <div className="blog-four-single">
            {/* blog-four-details */}
            <div className="blog-four-single-title">
              <div className="blog-four-title">
                <span>Internet</span>
              </div>
              <h4>
                <a href="#">
                  Practical Design Guidelines For Beginner Designers
                </a>
              </h4>
            </div>
            {/* blog-four-img */}
            <div className="blog-four-img">
              <img src="assets/images/blog/blog-one-img-3.jpg" alt="blog-one-img-3" />
              {/* blog-four-img-inner */}
              <div className="blog-four-img-inner text-center">
                <span>28</span>
                <h6>July</h6>
              </div>
            </div>
            <ul>
              <li>
                <Link className="blog-single-name" to="#"><i className="icon-man" />Harold C. Duncan</Link>
              </li>
              <li>
                {/* btn-read-more */}
                <Link to="#" className="btn-read-more">Read More</Link>
              </li>
            </ul>
          </div>
</SwiperSlide>
<SwiperButtun/>
          {/* blog-four-info */}
        </Swiper>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}
