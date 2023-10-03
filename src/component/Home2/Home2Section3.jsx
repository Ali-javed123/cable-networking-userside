import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home2Section3() {
  return (
    <>
<section className="about-one">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div className="about-one-img-1">
          <div className="about-one-inner wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            <img src="assets/images/shapes/about-one-img.png" alt="about-one-img" />
            <div className="about-one-inner-img-shape-1" />
            <div className="about-one-inner-img-shape-2" />
            <div className="about-one-inner-img-shape-3" />
            <div className="about-one-inner-img-shape-4" />
            <div className="about-one-inner-img-shape-5" />
            <div className="about-one-inner-img-shape-6 " />
            <div className="about-one-inner-img-shape-7" />
          </div>
          <div className="about-one-img-2 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <img src="assets/images/resources/about-one-img-1.jpg" alt="about-one-img-1" />
            <div className="about-one-play-btn">
              {/* video-popup */}
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        {/* about-one-info */}
        <div className="about-one-info wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Welcome To Mediafy</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Trusted &amp; Supper Speed Internet <span>Live &amp; TV</span> net</h2>
            <p>Sorem ipsum dolor sit amet consectetur. Consequat laoreet amet neque condimentum
              sit vitae. <span> Vulputate curabitur vitae</span> vestibulum</p>
          </div>
          {/* list-item */}
          <ul className="list-item">
            <li>
              <i className="icon-right-arrow" />
              <p>Pay 12 Months Bill and get a new
                Connection completely Free.</p>
            </li>
            <li>
              <i className="icon-right-arrow" />
              <p>Pay 3 Months Bill and get 10% Discount on
                OTC.</p>
            </li>
          </ul>
          {/* about-one-btn */}
          <div className="theme-btn">
            <NavLink to="/AboutUs" className="btn btn-bg-primary">Learn More Us<i className="icon-1" /></NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
