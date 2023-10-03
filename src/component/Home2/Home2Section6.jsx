import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home2Section6() {
  return (
    <>
<section className="whychoose-one">
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-main-icon" />
      <span>Why Choose Us</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2 className="mx-auto">Explore Why Should People <span className="section-main-title-primery">Choose
          Our</span> Service</h2>
    </div>
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* whychoose-one-box */}
        <div className="whychoose-one-box">
          <i className="icon-app-1" />
          <div className="text">
            <h4>Free Installations</h4>
            <div>
              <NavLink to="/Service" className="btn-read-more">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* whychoose-one-box */}
        <div className="whychoose-one-box">
          <i className="flaticon-stopwatch" />
          <div className="text">
            <h4>Fast Installation</h4>
            <div>
              <NavLink to="/Service" className="btn-read-more">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        {/* whychoose-one-box */}
        <div className="whychoose-one-box">
          <i className="flaticon-smart-tv-2" />
          <div className="text">
            <h4>8K Quality Videos</h4>
            <div>
              <NavLink to="/Service" className="btn-read-more">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
        {/* whychoose-one-box */}
        <div className="whychoose-one-box">
          <i className="flaticon-price-tag" />
          <div className="text">
            <h4>Cheap Pricing Plan</h4>
            <div>
              <NavLink to="/Service" className="btn-read-more">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="500ms">
        {/* whychoose-one-box */}
        <div className="whychoose-one-box">
          <i className="flaticon-tv" />
          <div className="text">
            <h4>Satellite TV</h4>
            <div>
              <NavLink to="/Service" className="btn-read-more">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
        {/* whychoose-one-box */}
        <div className="whychoose-one-box">
          <i className="flaticon-24-hours" />
          <div className="text">
            <h4>24/7 hr Support</h4>
            <div>
              <NavLink to="/Service" className="btn-read-more">Read More</NavLink>
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
