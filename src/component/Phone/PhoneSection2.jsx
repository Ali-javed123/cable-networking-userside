import { Swiper, SwiperSlide } from "swiper/react";
import React,{useState} from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun }  from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
import Modal from 'react-bootstrap/Modal';

export default function PhoneSection2() {
  const [active1,setactive1]=useState(false)
  const [show1,setshow1]=useState(false)


  return (
    <>
       <section>

<div className="container">
<Swiper  breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
}} loop   modules={[Autoplay,Navigation]} className=" ">
  
  
  <SwiperSlide>

<div className="card shadow" >
<div className="card-body">
    <img src="assets/images/phone-plan-icon.png" alt="" />
    <p className="mt-2 mb-2"><span className="websiteLink ">Globle Plan</span></p>
   <h3><sup>$</sup>34<sup>.95/mon</sup></h3>

    <a href="#" onClick={()=>setactive1(!active1)}  className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

</div>
</div>
  </SwiperSlide>
{/* pricing-package-one-box */}

<SwiperButtun/>
    </Swiper>  
    <div className="row">
      <div className="col-md-12">
      {active1?
      <>
      <div className="card">
    <div className="card-body">
    
<div className="row">
<div className="col-md-8">
<div className="SideBar">
  <div className="row">
    <div className="col-md-3">
      <img width={"100%"}  src="assets/images/Website-Home-Phone-Images-2.png" alt="" />
    </div>
    <div className="col-md-9">
      <h3>Globle Home Phone Plan</h3>
      <p>Comwave offers affordable pricing and top-notch service, making it simple for you to stay in touch with friends and family throughout the globe. You may call anywhere in the world for free locally and almost endlessly long distance to 60 countries with the Global Plan. In addition, 13 features—including caller ID, voicemail, and call forwarding—are yours free of charge.</p>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light mr-2" style={{marginRight:"20px"}} onClick={()=>setshow1("showall")} data-bs-toggle="pill" data-bs-target="#pills-showall" type="button" role="tab" aria-controls="pills-showall" aria-selected="true">Show
          All</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light" data-bs-toggle="pill"onClick={()=>setshow1("popular")} data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Popular</button>
      </li>

      
    </ul>
    {/* tab-content */}
    <div className="tab-content" id="pills-tabContent">
     

      <div className={show1=="showall"?"tab-pane fade show active":"tab-pane fade"} id="pills-showall">
        <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
           <ol className="" >
            <li className="text-start  mt-2"><i className="fa fa-check websiteLink"/> Unlimited local Call</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/> My Account Web Access</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/> Free long distance calling</li>

           </ol>
          </div>
      
        </div>
       
      </div>
     
      <div className={show1=="popular"?"tab-pane fade show active":"tab-pane fade"} id="pills-popular">
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
     
    
    </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-4" style={{borderLeft:"1px solid #000"}}>
<p>Individual Channels From</p>
<h2><sup>$</sup>0<sup>.95/mon</sup></h2>
</div>
</div>

    </div>
  </div>    
  </>:null

      }
  
      </div>
    </div>
</div>
</section>
    </>
  )
}
