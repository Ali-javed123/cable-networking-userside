import React from 'react'

export default function Home4Section3() {
  return (
    <>
<section className="services-four">
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
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12 text-center wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="400ms">
        {/* services-four-box */}
        <div className="services-four-box">
          <h3>Fiber Broadband</h3>
          <i className="flaticon-fiber" />
          <p>Sit amet consectetur ellentesvel seen cursus magna proin vitae.</p>
          <div className="services-four-btn">
            <a href="services.html" className="btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12 text-center wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="250ms">
        {/* services-four-box */}
        <div className="services-four-box">
          <h3>Satellite TV</h3>
          <i className="flaticon-tv" />
          <p>Sit amet consectetur ellentesvel seen cursus magna proin vitae.</p>
          <div className="services-four-btn">
            <a href="services.html" className="btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-md-12 col-sm-12 text-center wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* services-four-box */}
        <div className="services-four-box">
          <h3>Smart Mobiles</h3>
          <i className="flaticon-energy-management" />
          <p>Sit amet consectetur ellentesvel seen cursus magna proin vitae.</p>
          <div className="services-four-btn">
            <a href="services.html" className="btn-read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* services-four-bottom */}
    <div className="services-four-bottom text-center">
      <p>Need Any Consultation's For New Services?
        <a href="contact.html">Contact Us</a>
      </p>
    </div>
  </div>
</section>

    </>
  )
}
