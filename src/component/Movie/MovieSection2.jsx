import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MovieSection2() {
  return (
    <>
<section className="about-six">
  <div className="container">
    {/* about-six-box */}
    <div className="about-six-box">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          <div className="about-six-box-video">
            <img src="assets/images/movies/featured-movies-two-img-1.jpg" alt="featured-movies-two-img-1" />
            {/* featured-movies-two-img-inner */}
            <div className="about-six-box-video-shape" />
            <div className="about-six-box-video-inner">
              <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                {/* video-play-btn */}
                <div className="video-play-btn">
                  <i className="fas fa-play" />
                </div>
              </a>
            </div>
            {/* featured-movies-two-timer */}
            <ul className="about-six-box-video-timer">
              <li>
                <p><i className="fas fa-video" />2 hr 30 min</p>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />4.5
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
          {/* about-six-info */}
          <div className="about-six-box-info">
            <ul className="about-six-box-info-title">
              <li className="pg-14">PG-14</li>
              <li className="imdb">IMDb</li>
            </ul>
            {/* section-main-title */}
            <div className="section-main-title">
              <h2>The Musical Guys</h2>
              <p>Sorem ipsum dolor amet consectetur onseq laoreet amet
                condimentum.<span> Vulputate curabitur vitae</span> vestibulum</p>
            </div>
            <ul className="about-six-box-info-detail list-unstyled">
              <li>
                <p><span>Cast</span>: Robert F. Bravo, John M. Murphy
                </p>
              </li>
              <li>
                <p><span>Genre</span>: Adventure, Travel, Forest
                </p>
              </li>
            </ul>
            {/* about-six-btn */}
            <div className="theme-btn">
              <NavLink to="/MovieDetail" className="btn btn-bg-primary">Watch Trailer<i className="icon-1" /></NavLink>
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
