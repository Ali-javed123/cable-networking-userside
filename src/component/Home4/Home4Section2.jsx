import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home4Section2() {
  return (
    <>
<section className="about-four">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* about-four-inner */}
        <div className="about-four-inner">
          {/* about-four-img-1 */}
          <div className="about-four-img-1">
            <div className="about-four-inner-img-1">
              <img src="assets/images/resources/about-four-img-1.png" alt="about-four-img-1" />
            </div>
            <div className="about-four-inner-img-2">
              <img src="assets/images/shapes/package-one-img-shape-3.jpg" alt="package-one-img-shape-3" />
              <img src="assets/images/shapes/about-four-icon-1.png" alt="about-four-icon-1" />
            </div>
          </div>
          {/* about-four-img-2 */}
          <div className="about-four-img-2">
            <div className="about-four-inner-img-3">
              <img src="assets/images/shapes/vector-shape.png" alt="vector-shape" />
              <div className="about-four-inner-img-3-text">
                <h2>50</h2>
                <p>MBPS</p>
              </div>
            </div>
            <div className="about-four-inner-img-4">
              <img src="assets/images/resources/about-four-img-2.png" alt="about-four-img-2" />
            </div>
          </div>
          {/* about-four-inner-shape */}
          <div className="about-four-inner-shape" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* about-four-info */}
        <div className="about-four-info">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Welcome To Mediafy</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2><span className="section-main-title-primery">25+</span>Years Of Experience In
              Broadband <span className="section-main-title-primery">Internet</span></h2>
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
          {/* about-four-btn */}
          <div className="about-four-experience">
            {/* theme-btn */}
            <div className="theme-btn">
              <NavLink to="/AboutUs" className="btn btn-bg-primary">Learn More Us<i className="icon-1" /></NavLink>
            </div>
            {/* about-four-experience-img-list */}
            <div className="about-four-experience-img-list">
              <ul>
                <li>
                  <img src="assets/images/resources/experience-img-1.png" alt="experience-img-1" />
                </li>
                <li>
                  <img src="assets/images/resources/experience-img-2.png" alt="experience-img-2" />
                </li>
                <li>
                  <img src="assets/images/resources/experience-img-3.png" alt="experience-img-3" />
                </li>
                <li>
                  <img src="assets/images/resources/experience-img-4.png" alt="experience-img-4" />
                </li>
              </ul>
              <p className="about-four-experience-text"><span>8k+</span> Customer</p>
            </div>
          </div>
          {/* about-four-user-img-and-sign */}
          <div className="about-four-user-img-and-sign">
            <div className="about-four-user-img">
              <a href="#">
                <img src="assets/images/resources/about-about-user-img-1.png" alt="about-about-user-img-1" />
              </a>
              <h6>Lawrence M. Carlson</h6>
            </div>
            <div className="about-four-user-sign">
              <img src="assets/images/resources/about-four-user-sign.png" alt="about-four-user-sign" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
