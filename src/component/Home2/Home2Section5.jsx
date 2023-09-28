import React from 'react'

export default function Home2Section5() {
  return (
    <>
<section className="video-one">
  {/* video-one-shape */}
  <div className="video-one-shape-1" />
  <div className="video-one-shape-2" />
  <div className="video-one-shape-3" />
  <div className="video-one-shape-4" />
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* video-one-content */}
        <div className="video-one-content">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>15% Off For New Users</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2><span>Get Our Faster</span>
              Quality Internet
            </h2>
          </div>
          {/* video-one-content-info */}
          <div className="video-one-content-info">
            <div className="video-one-icon">
              <img src="assets/images/shapes/shape-2.png" alt="shape-1" />
            </div>
            <div className="text">
              <h3>$25/<span>montly</span></h3>
              <p>
                Internet &amp; Live TV Series
              </p>
              <div className="video-one-content-info-btn">
                <a href="package.html" className="btn-read-more">Let’s Talk Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-4 col-sm-3 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* video-one-btn */}
        <div className="video-one-play-btn">
          {/* video-one-btn-shape */}
          <div className="video-one-play-btn-shape">
            {/* video-popup */}
            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
