import React from 'react'

export default function Home3Section5() {
  return (
    <>
<section className="free-movies-three">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        <div className="free-movies-three-img">
          <img src="assets/images/resources/free-movies-three-img.png" alt="free-movies-three-img" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* free-movies-three-info */}
        <div className="free-movies-three-info">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Get Free Access</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Get 7 Days Free Access Unlimited <span className="section-main-title-primery">Movies
                &amp; TV</span> Shows</h2>
            <p>Sorem ipsum dolor sit amet consectetur. Consequat laoreet neque
              condimentum sit vitae. Vulputate curabitur vestibulum</p>
          </div>
          {/* free-movies-three-btn */}
          <div className="free-movies-three-btn">
            <a href="movies-list.html" className="btn btn-bg-primary">Get Started<i className="icon-1" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}
