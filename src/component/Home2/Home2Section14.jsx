import React from 'react'

export default function Home2Section14() {
  return (
    <>
<section className="cta-one">
  <div className="container">
    {/* cta-one-shape */}
    <div className="cta-one-shape" />
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* cta-one-img */}
        <div className="cta-one-img">
          <img src="assets/images/resources/cta-one-img.jpg" alt="contact-one-woman-watching-tv-series-movies-online-streaming-service-home" />
          {/* cta-one-shape-2 */}
          <div className="cta-one-shape-2">
            <img src="assets/images/shapes/contact-one-shape-2.png" alt="contact-one-shape-2" />
          </div>
          {/* cta-one-video */}
          <div className="cta-one-video text-center">
            {/* cta-one-play-btn */}
            <div className="cta-one-play-btn">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                <i className="fas fa-play" />
              </a>
            </div>
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* cta-one-info */}
        <div className="cta-one-info">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Check Availability</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Let's find deals and services <span className="section-main-title-primery">available
                in</span> your area</h2>
          </div>
          {/* cta-one-btn */}
          <div className="cta-one-btn">
            <input type="text" placeholder="Search area" />
            <button className="btn btn-bg-primary">Check Availability<i className="icon-1" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}
