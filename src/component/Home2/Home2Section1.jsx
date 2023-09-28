import React from 'react'

export default function Home2Section1() {
  return (
    <>
    	<section className="banner-one">
  <div className="banner-shape-1" />
  <div className="banner-shape-2" />
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
        {/* banner-one-left */}
        <div className="banner-one-left">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>15% Off For New Users</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h1>Faster &amp; Reliable <strong> Quality</strong> <span> Internet</span>
              <strong>Provider</strong>
            </h1>
          </div>
          {/* banner-one-left-details */}
          <div className="banner-one-left-details">
            <div className="banner-details-icon">
              <img src="assets/images/shapes/shape-1.png" alt="shape-1" />
            </div>
            <p>We Have <span> 5,26,384k+ </span> Register Users</p>
          </div>
          {/* banner-one-btn */}
          <div className="theme-btn">
            <a href="#" className="btn btn-bg-primary">Explore Package<i className="icon-1" /></a>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        {/* banner-one-right */}
        <div className="banner-one-right">
          <div className="banner-one-right-img-1">
            <img className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms" src="assets/images/resources/banner-one-img-1.png" alt="banner-img-1" />
          </div>
          <div className="banner-one-right-img-2">
            <img className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms" src="assets/images/resources/banner-two-img-3.jpg" alt="banner-img-3" />
          </div>
          <div className="banner-one-right-img-3">
            <img className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms" src="assets/images/resources/banner-three-img-3.png" alt="banner-img-1234" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
