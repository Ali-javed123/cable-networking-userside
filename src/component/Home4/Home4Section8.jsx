import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home4Section8() {
  return (
    <>
<section className="about-four-two">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="row align-items-center">
          <div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* about-four-two-img-1 */}
            <div className="about-four-two-img-1">
              <img src="assets/images/resources/about-four-two-img-1.png" alt="about-four-two-img-1" />
              <div className="about-four-two-shape">
                <img src="assets/images/shapes/about-four-two-shape-img-2.png" alt="about-four-two-shape-img-2" />
                <div className="package-three-text">
                  <h2>HD</h2>
                  <p>Quality</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInDown animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* about-four-two-img-2 */}
            <div className="about-four-two-img-2">
              <img src="assets/images/resources/about-four-two-img-2.png" alt="about-four-two-img-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* about-four-two-info */}
        <div className="about-four-two-info">
          {/* section-title */}
          <div className="about-four-two-play-btn">
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup"><i className="fa fa-play" /></a>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Get 7 Days Free Access
              Unlimited
              <span className="section-main-title-primery">Movies &amp; TV</span> Shows
            </h2>
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
          {/* theme-btn */}
          <div className="theme-btn">
            <NavLink to="/AboutUs" className="btn btn-bg-primary">Get Started<i className="icon-1" /></NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}
