import React from 'react'

export default function Home2Section2() {
  return (
    <>
    
<section className="services-one">
  <div className="services-one-shape-1" />
  <div className="services-one-shape-2" />
  <div className="services-one-shape-3" />
  <div className="services-one-shape-4" />
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
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
            <i className="flaticon-fiber" />
          </div>
          <h3>Fiber Broadband</h3>
          <p>Sit amet consectetur. Pellentesque vel cursus magna proin enim odio ipsu vitae.
            pretium ultrices odio eu at cras.</p>
          <div className="services-one-btn">
            <a href="services.html" className="btn-arrow-right">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
            <i className="flaticon-tv" />
          </div>
          <h3>Satellite TV</h3>
          <p>Sit amet consectetur. Pellentesque vel cursus magna proin enim odio ipsu vitae.
            pretium ultrices odio eu at cras.</p>
          <div className="services-one-btn">
            <a href="services.html" className="btn-arrow-right">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-md-12 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
            <i className="flaticon-energy-management" />
          </div>
          <h3>Smart Broadband</h3>
          <p>Sit amet consectetur. Pellentesque vel cursus magna proin enim odio ipsu vitae.
            pretium ultrices odio eu at cras.</p>
          <div className="services-one-btn">
            <a href="services.html" className="btn-arrow-right">Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* services-one-bottom */}
    <div className="services-one-bottom text-center">
      <p>Need Any Consultation's For New Services?
        <a href="contact.html">Contact Us</a>
      </p>
    </div>
  </div>
</section>

    </>
  )
}
