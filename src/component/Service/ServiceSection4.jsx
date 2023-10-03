    import React from 'react'
    import { NavLink } from 'react-router-dom'
    export default function ServiceSection4() {
      return (
        <>
<section className="services-six">
  <div className="services-six-shape-1" />
  <div className="services-six-shape-2" />
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-main-icon" />
      <span>What We Offer</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2 className="mx-auto">Mediafy now comes <span className="section-main-title-primery">with an
          wide</span> array of other services.</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12 text-center wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* services-six-box */}
        <div className="services-six-box">
          <h3>Fiber Broadband</h3>
          <i className="flaticon-fiber" />
          <p>Sit amet consectetur ellentesvel seen cursus magna proin vitae.</p>
          <div className="services-six-btn">
            <a href="#" className="btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12 text-center wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        {/* services-six-box */}
        <div className="services-six-box">
          <h3>Satellite TV</h3>
          <i className="flaticon-tv" />
          <p>Sit amet consectetur ellentesvel seen cursus magna proin vitae.</p>
          <div className="services-six-btn">
            <a href="#" className="btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-md-12 col-sm-12 text-center wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
        {/* services-six-box */}
        <div className="services-six-box">
          <h3>Smart Mobiles</h3>
          <i className="flaticon-energy-management" />
          <p>Sit amet consectetur ellentesvel seen cursus magna proin vitae.</p>
          <div className="services-six-btn">
            <a href="#" className="btn-read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* services-six-bottom */}
    <div className="services-six-bottom text-center">
      <p>Need Any Consultation's For New Services?
        <NavLink to="/ContactUs">Contact Us</NavLink>
      </p>
    </div>
  </div>
</section>

          
        </>
      )
    }
    