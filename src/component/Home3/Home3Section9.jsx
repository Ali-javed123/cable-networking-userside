import React from 'react'

export default function Home3Section9() {
  return (
    <>
<section className="cta-three">
  <div className="container">
    {/* cta-three-shape-2 */}
    <div className="cta-three-shape-2" />
    {/* cta-three-shape-3 */}
    <div className="cta-three-shape-3" />
    <div className="cta-three-inner">
      {/* cta-three-shape-1 */}
      <div className="cta-three-shape-1">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* cta-three-info */}
            <div className="cta-three-info">
              {/* section-title */}
              <div className="section-title">
                <i className="icon-main-icon" />
                <span>Get More Update</span>
              </div>
              {/* section-main-title */}
              <div className="section-main-title">
                <h2>Subscribe <span className="section-main-title-primery">Our Newsletter</span>
                  to
                  Get More Updates</h2>
              </div>
              {/* cta-three-btn */}
              <div className="cta-three-btn">
                <input type="text" placeholder="Search area" />
                <button className="btn btn-bg-primary"><span>Subscribe<i className="icon-1" /></span></button>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* cta-three-img */}
            <div className="cta-three-img">
              <img src="assets/images/resources/cta-three-img.png" alt="cta-three-img" />
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
