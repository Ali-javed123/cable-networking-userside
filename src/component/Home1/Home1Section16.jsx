import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperButtun }  from '../SwiperButtun';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
import Modal from 'react-bootstrap/Modal';

export default function Home1Section16() {


    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
  
    const [show3, setShow3] = useState(false);
  
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
  
    const [show4, setShow4] = useState(false);
  
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
  
  
  
  
    const [show6, setShow6] = useState(false);
  
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
  
    const [show5, setShow5] = useState(false);
  
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
  
  return (
    <>
    
    
    <section>

        <div className="container">
        <Swiper navigation={true} pagination={true} breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }} loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className=" ">
          
          
          <SwiperSlide>

    <div className="card shadow" >
        <div className="card-body">
            <img src="assets/images/life.png" alt="" />
            <p>LifeStyle</p>
            <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow2}>Read more</a>

        </div>
    </div>
          </SwiperSlide>
        {/* pricing-package-one-box */}
        <SwiperSlide>

        <div className="pricing-package-one-box">
          {/* box-title */} 
            <div className="box-icon text-center">
            <img src='assets/images/tv-icon.png' className="flaticon-network-cable" />
          </div>
          <div className="box-title text-center">
            <span>I Love TV </span>
            
          </div>
          
          {/* box-icon */}
       
          <div className="box-price">
          <h3 style={{fontSize:"25px"}}>Monthly Plan</h3>
          <h3 style={{fontSize:"20px"}}><sup>$</sup>49<sup>.95/mon</sup></h3>
          
            <h3><sup> $</sup>74<sup> .95/mon</sup></h3>
          </div>
          {/* box-item-list */}
          {/* <ul className="box-item-list">
            <li><i className="icon-angle-double-right" />Internet with 100Mbps</li>
            <li><i className="icon-angle-double-right" />Multiple users</li>
            <li><i className="icon-angle-double-right" />WiFi router &amp; prevention</li>
            <li><i className="icon-angle-double-right" />Unlimited devices</li>
          </ul> */}
          {/* box-price */}
         
          {/* box-btn */}
          <div className="box-btn">
            {/* <Link className='text-dark' style={{textDecoration:"none"}} to="#" onClick={handleShow}>+one time activation & free shipping </Link> */}
            <a href="#" className="btn btn-small-primary btn-bg-white mt-2"  onClick={handleShow4}>Read more</a>

          </div>
        </div>
  </SwiperSlide>


  <SwiperSlide>

  <div className="pricing-package-one-box">
          {/* box-title */} 
            <div className="box-icon text-center">
            <img src='assets/images/tv-icon.png' className="flaticon-network-cable" />
          </div>
          <div className="box-title text-center">
            <span>Family & Children</span>
            
          </div>
          
          {/* box-icon */}
       
          <div className="box-price">
          <h3 style={{fontSize:"25px"}}>Monthly Plan</h3>
          <h3 style={{fontSize:"20px"}}><sup>$</sup>49<sup>.95/mon</sup></h3>
          
            <h3><sup> $</sup>24<sup> .95/mon</sup></h3>
          </div>
  
         
            <a href="#" className="btn btn-small-primary btn-bg-white mt-2"  onClick={handleShow6}>Read more</a>
          {/* box-btn */}
          <div className="box-btn">
            {/* <Link className='text-dark' style={{textDecoration:"none"}} to="#" onClick={handleShow}>+one time activation & free shipping </Link> */}

          </div>
        </div>
</SwiperSlide>
            </Swiper>  
        </div>
    </section>

    <Modal size='xl' show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Package Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="assets/images/Fixer-Upper-2.jpg" alt="" />

                            </div>

                            <div className="col-md-9">
                                <div className="row justify-content-center" style={{borderBottom:"1px solid #000"}}>
                                    <div className="col-4">
                           
                                   <p> LiftStyle</p>    
                                    </div>
                                    <div className="col-4">
                                        <p><sup>$</sup>24<sup>.95/mon</sup></p>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
         
          </div>
        </Modal.Body>
       
      </Modal>
    </>

    
  )
}
