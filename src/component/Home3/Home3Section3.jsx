import React from 'react'
import { NavLink } from 'react-bootstrap'
export default function Home3Section3() {
  return (
    <>
<section className="about-three">
  <div className="about-three-shape" />
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* about-three-img */}
        <div className="about-three-img">
          <img src="assets/images/shapes/about-three-shape-img-3.png" alt="about-three-shape-img-3" />
          <div className="about-three-img-2" />
          <div className="about-three-img-3" />
          <div className="about-three-img-4" />
          <div className="about-three-img-5" />
          <div className="about-three-img-6" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* about-three-info */}
        <div className="about-three-info">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Welcome To Mediafy</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Trusted &amp; Supper Speed Internet <span className="section-main-title-primery unline">Live &amp; TV</span> net</h2>
            <p>Sorem ipsum dolor sit amet consectetur. Consequat laoreet amet neque
              condimentum sit vitae.<span> Vulputate curabitur vitae</span> vestibulum</p>
          </div>
          {/* about-three-details */}
          <ul className="about-three-details">
            <li className="text">
              <i className="flaticon-cloud-network-1" />
              <h6><a href="#">Multiroom</a></h6>
            </li>
            <li className="text">
              <i className="flaticon-efficiency" />
              <h6><a href="#">Ultrafast</a></h6>
            </li>
            <li className="text">
              <i className="flaticon-watching-tv" />
              <h6><a href="#">4k and 8K</a></h6>
            </li>
          </ul>
          {/* about-three-btn */}
          <div className="about-three-btn">
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
