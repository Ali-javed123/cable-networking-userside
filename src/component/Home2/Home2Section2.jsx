import React from 'react'
import { NavLink } from 'react-router-dom'
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
      <h3 className="mx-auto">Why choose Comwave for Internet? </h3>
      <p>Reliable, affordable and unlimited high-speed internet and Wi-Fi, and friendly support when you need it.</p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
           <img src="assets/images/icon1.png" width={"100%"} alt="" />
          </div>
          <h3>Reliable connection</h3>
          <p>For all  devices, even if they are all online.</p>
          <div className="services-one-btn">
            {/* <NavLink to="/Service" className="btn-arrow-right">Read More</NavLink> */}
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-md-6 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
          <img src="assets/images/icon2.png" width={"100%"} alt="" />

          </div>
          <h3>The Speed You Really want</h3>
          <p>Achieve a more noteworthy measure of what you love with the speediest Web and Wi-Fi incorporation.</p>
          {/* <div className="services-one-btn">
            <NavLink to="/Service" className="btn-arrow-right">Read More</NavLink>
          </div> */}
        </div>
      </div>
      <div className="col-lg-3  col-md-12 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
          <img src="assets/images/icon2.png" width={"100%"} alt="" />


          </div>
          <h3>Friendly Customer Service</h3>
          <p>With over 3,000 positive reviews, we are committed to customer service.</p>
          {/* <div className="services-one-btn">
            <NavLink to="/Service" className="btn-arrow-right">Read More</NavLink>
          </div> */}
        </div>
      </div>

      <div className="col-lg-3  col-md-12 col-sm-12 text-center wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
        {/* services-one-box */}
        <div className="services-one-box">
          <div className="services-one-icon">
          <img src="assets/images/icon4.png" width={"100%"} alt="" />


          </div>
          <h3>Incredible Savings</h3>
          <p>Stretch your dollar  with our special offers.</p>
          {/* <div className="services-one-btn">
            <NavLink to="/Service" className="btn-arrow-right">Read More</NavLink>
          </div> */}
        </div>
      </div>
    </div>
    {/* services-one-bottom */}
    {/* <div className="services-one-bottom text-center">
      <p>Need Any Consultation's For New Services?
        <NavLink to="/ContactUs">Contact Us</NavLink>
      </p>
    </div> */}
  </div>
</section>

    </>
  )
}
