import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ServiceSection3() {
  return (
    <>
<section className="services-joinus services-five">
  <div className="services-five-shape-1" />
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* services-five-left */}
        <div className="services-five-left">
          <div className="services-five-img-box">
            <div className="services-five-img">
              <img src="assets/images/services/services-five-img-1.jpg" alt="services-five-img-1" />
            </div>
            <div className="services-five-img-shape">
              <img src="assets/images/shapes/services-joinus-shape-1.png" alt="services-joinus-shape-1" />
              <img src="assets/images/shapes/services-joinus-shape-2.png" alt="services-joinus-shape-2" />
              <div className="services-five-img-btn">
                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                  <div className="video-play-btn">
                    <i className="fas fa-play" />
                  </div>
                </a>
              </div>
              <div className="services-five-img-watch-trailer">
                <a href="#">Watch Trailer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* services-five-right */}
        <div className="services-five-right">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Join Our Internet</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Get Unlimited <span className="section-main-title-primery">Control</span>
              Of Your Internet
            </h2>
            <p>Sorem ipsum dolor sit amet consectetur. Consequat laoreet amet
              condimentum sit vitae. Vulputate curabitur vitae vestibulum</p>
          </div>
          {/* services-five-right-details */}
          <div className="services-five-right-details">
            {/* services-five-icon */}
            <div className="services-five-icon">
              <img src="assets/images/shapes/shape-1.png" alt="shape-1" />
            </div>
            {/* text */}
            <div className="text">
              <p>
                <span>$25/</span>Internet &amp; Live TV Series
              </p>
            </div>
          </div>
          {/* services-five-btn */}
          <div className="theme-btn">
            <a href="#" className="btn btn-bg-primary">Get Started<i className="icon-1" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}
