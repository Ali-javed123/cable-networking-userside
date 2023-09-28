import React from 'react'

export default function Home1Section5() {
  return (
    <>
 <section className="popular-movies-two">
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-two-icon" />
      <span>Popular Movies</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2>Explore Amazing Movies</h2>
    </div>
    <ul className="nav nav-pills" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-showall" type="button" role="tab" aria-controls="pills-showall" aria-selected="true">Show
          All</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Popular</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-trailer" type="button" role="tab" aria-controls="pills-trailer" aria-selected="false">Trailer</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-drama" type="button" role="tab" aria-controls="pills-drama" aria-selected="false">Drama</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-horror" type="button" role="tab" aria-controls="pills-horror" aria-selected="false">Horror</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-cartoon" type="button" role="tab" aria-controls="pills-cartoon" aria-selected="false">Cartoon</button>
      </li>
    </ul>
    {/* tab-content */}
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-showall">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-1.jpg" alt="popular-movie-one-img-1" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Montreal Winter
                  </a>
                </h6>
                <h6>2011</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#" className>
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-2.jpg" alt="popular-movie-one-img-2" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-3.jpg" alt="popular-movie-one-img-3" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-4.jpg" alt="popular-movie-one-img-4" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-5.jpg" alt="popular-movie-one-img-5" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="500ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-6.jpg" alt="popular-movie-one-img-6" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-7.jpg" alt="popular-movie-one-img-7" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="700ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-8.jpg" alt="popular-movie-one-img-8" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-popular">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-5.jpg" alt="popular-movie-one-img-5" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="500ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-6.jpg" alt="popular-movie-one-img-6" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-7.jpg" alt="popular-movie-one-img-7" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="700ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-8.jpg" alt="popular-movie-one-img-8" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-trailer">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="000ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-3.jpg" alt="popular-movie-one-img-3" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-1.jpg" alt="popular-movie-one-img-1" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Montreal Winter
                  </a>
                </h6>
                <h6>2011</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#" className>
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-4.jpg" alt="popular-movie-one-img-4" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-2.jpg" alt="popular-movie-one-img-2" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-drama">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="000ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-1.jpg" alt="popular-movie-one-img-1" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-2.jpg" alt="popular-movie-one-img-2" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-3.jpg" alt="popular-movie-one-img-3" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Montreal Winter
                  </a>
                </h6>
                <h6>2011</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#" className>
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-4.jpg" alt="popular-movie-one-img-4" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-horror">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="000ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-2.jpg" alt="popular-movie-one-img-2" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-3.jpg" alt="popular-movie-one-img-3" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-4.jpg" alt="popular-movie-one-img-4" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-1.jpg" alt="popular-movie-one-img-1" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-5.jpg" alt="popular-movie-one-img-5" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-cartoon">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="000ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-2.jpg" alt="popular-movie-one-img-2" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-5.jpg" alt="popular-movie-one-img-5" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Leave Your Films
                  </a>
                </h6>
                <h6>1998</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />35
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-6.jpg" alt="popular-movie-one-img-6" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">Washington DC</a>
                </h6>
                <h6>2015</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.8
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />23
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-7.jpg" alt="popular-movie-one-img-7" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
            {/* popular-movies-two-box */}
            <div className="popular-movies-two-box">
              {/* popular-movies-two-img */}
              <div className="popular-movies-two-img">
                <img src="assets/images/resources/popular-movie-one-img-8.jpg" alt="popular-movie-one-img-8" />
                {/* popular-movies-two-img-inner */}
                <div className="popular-movies-two-img-inner">
                  <div className="popular-movies-two-img-inner-link">
                    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-play" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="popular-movies-two-play-btn">
                        <i className="icon-video-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* popular-movies-two-title */}
              <div className="popular-movies-two-title">
                <h6>
                  <a href="#">
                    Conservatives
                  </a>
                </h6>
                <h6>2018</h6>
              </div>
              {/* popular-movies-two-text */}
              <ul className="popular-movies-two-text">
                <li>
                  <a href="#">
                    <i className="fas fa-star" />4.3
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comment-dots" />18
                  </a>
                </li>
              </ul>
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
