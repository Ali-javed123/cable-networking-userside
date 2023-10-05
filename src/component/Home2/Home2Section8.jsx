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

export default function Home2Section8() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
    
  <section className="pricing-package-one">
  <div className="pricing-package-one-shape-1" />
  <div className="pricing-package-one-shape-2" />
  <div className="pricing-package-one-shape-3" />
  <div className="pricing-package-one-shape-4" />
  <div className="pricing-package-one-shape-5" />
  <div className="pricing-package-one-shape-6" />
  <div className="pricing-package-one-shape-7" />
  <div classNam e="pricing-package-one-shape-8" />
  <div className="pricing-package-one-shape-9" />
  <div className="container">
    {/* section-title */}
    <div className="section-main-title text-center">
      <p className="mx-auto"> Choose The Internet Package That Best Suits Your Needs</p>
      <button className="btn btn-small-primary btn-bg-white mt-2">Not Sure Which Internet Speed to Choose? </button>
    </div>
   
    {/* <div className="section-title text-center">
      <i className="icon-main-icon" />
      <span>Pricing Package</span>
    </div> */}
  
    <div className="row">
        {/* pricing-package-one-box */}
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

        <div className="pricing-package-one-box">
          {/* box-title */}
          <div className="box-title text-center">
            <span>The Crazy Fast Plan</span>
            
          </div>
          {/* box-icon */}
          <div className="box-icon text-center">
            <img src='assets/images/icon11.png' className="flaticon-network-cable" />
          </div>
          <div className="box-price">
          <h3 style={{fontSize:"25px"}}>3000<sup></sup></h3>
          <h3 style={{fontSize:"25px"}}>Mbps</h3>
          
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
            <a href="#" className="btn btn-small-primary btn-bg-white"  onClick={handleShow}>+one time activation & free shipping</a>
            <a href="#" className="btn btn-small-primary btn-bg-white mt-2"  onClick={handleShow2}>Read more</a>

          </div>
        </div>
          </SwiperSlide>
        {/* pricing-package-one-box */}
        <SwiperSlide>

        <div className="pricing-package-one-box">
          {/* box-title */}
          <div className="box-title text-center">
            <span>The Fast Plan</span>
            
          </div>
          {/* box-icon */}
          <div className="box-icon text-center">
            <img src='assets/images/icon11.png' className="flaticon-network-cable" />
          </div>
          <div className="box-price">
          <h3 style={{fontSize:"25px"}}>3000<sup></sup></h3>
          <h3 style={{fontSize:"25px"}}>Mbps</h3>
          
            <h3><sup> $</sup>22<sup> .95/mon</sup></h3>
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
            <a href="#" className="btn btn-small-primary btn-bg-white"  onClick={handleShow3}>+one time activation & free shipping</a>
            <a href="#" className="btn btn-small-primary btn-bg-white mt-2"  onClick={handleShow4}>Read more</a>

          </div>
        </div>
  </SwiperSlide>


  <SwiperSlide>

<div className="pricing-package-one-box">
  {/* box-title */}
  <div className="box-title text-center">
    <span>The Super Fast Plan</span>
    
  </div>
  {/* box-icon */}
  <div className="box-icon text-center">
    <img src='assets/images/icon11.png' className="flaticon-network-cable" />
  </div>
  <div className="box-price">
  <h3 style={{fontSize:"25px"}}>300<sup></sup></h3>
  <h3 style={{fontSize:"25px"}}>Mbps</h3>
  
    <h3><sup> $</sup>69<sup> .95/mon</sup></h3>
  </div>
  {/* box-item-list */}

  {/* box-price */}
 
  {/* box-btn */}
  <div className="box-btn">
    {/* <Link className='text-dark' style={{textDecoration:"none"}} to="#" onClick={handleShow}>+one time activation & free shipping </Link> */}
    <a href="#" className="btn btn-small-primary btn-bg-white"  onClick={handleShow5}>+one time activation & free shipping</a>
    <a href="#" className="btn btn-small-primary btn-bg-white mt-2"  onClick={handleShow6}>Read more</a>

  </div>
</div>
</SwiperSlide>
            </Swiper>  

    </div>
  </div>
</section>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Internet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <p>Pricing does not include applicable taxes. A shipping fee applies and will vary based on the shipping address.</p>
              <p>Internet service is available to customers where access and technology permits. An Activation Fee of $95 may apply, and a fully refundable equipment security deposit may be required. *Unlimited Usage Plans are governed by our Fair Usage Policy available at <span className="websiteLink"> www.comwave.net/fairusage </span>to ensure fair bandwidth delivery to all customers and to ensure the integrity of the Comwave network.</p>
              <p>Complete terms and conditions that govern the use of all Comwave services are available at <span className="websiteLink">www.comwave.net/terms</span>.</p>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>

      <Modal size='xl' show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Package Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <img src="assets/images/thumnil.png" style={{width:"100%",border:"1px solid #000",borderRadius:"50%"}} alt="" />

            </div>
            <div className="col-md-4">
              <p>1000 Mbps includes: </p>
              <ul style={{listStyle:"none"}}>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Up to 30 Megabits per second (Mbps) download</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>You can download up to 2Mbpsf to upload up to 30Mbps.</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/> Suitable for use on an occasional basis by the Internet</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Unlimited data and devices</li>

              </ul>


            </div>
            <div className="col-md-4">
              <p>The Packages is Best For </p>
              <div className="row">
                <div className="col-md-4">

                <img width={"100%"} src="assets/images/speed.png" alt="" />
                <p>Best For <b>Most Affordable</b></p>
                </div>
              </div>


            </div>
          </div>
        </Modal.Body>
       
      </Modal>





      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Internet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <p>Prices do not include any necessary taxes. Depending on the shipping address, there is a shipping charge that varies.</p>
              <p>Customers can access internet service wherever access and technology allow. There might be a $95 activation fee and a fully refundable equipment security deposit needed. To ensure fair bandwidth delivery to all customers and to maintain the integrity of the Comwave network, Unlimited Usage Plans are governed by our Fair Usage Policy, which is available at<span className="websiteLink"> www.comwave.net/fairusage.</span> </p>
              <p>You can find the full terms and conditions that apply to all Comwave services at <span className="websiteLink">www.comwave.net/terms.</span></p>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>

      <Modal size='xl' show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Package Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <img src="assets/images/thumnil.png" style={{width:"100%",border:"1px solid #000",borderRadius:"50%"}} alt="" />

            </div>
            <div className="col-md-5">
              <p>30 Mbps includes: </p>
              <ul style={{listStyle:"none"}}>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Maximum download rates of 30 Mbps</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Up to 2 Mbps in upload rates.</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/> Recommended for Occasional Internet Use</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Unlimited data and devices</li>

              </ul>


            </div>
            <div className="col-md-3">
              <p>The Packages is Best For </p>
              <div className="row">
                <div className="col-md-4">

                <img width={"100%"} src="assets/images/speed (1).png" alt="" />
                <p>Best For <b>Most Affordable</b></p>
                </div>
              </div>


            </div>
          </div>
        </Modal.Body>
       
      </Modal>




      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>Internet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <p>Taxes that may be due are not included in the price. There is a shipping charge, which varies depending on the shipping address.</p>
              <p>  Customers can access internet service wherever access and technology allow. There might be a $95 activation fee and a fully refundable equipment security deposit needed. To ensure fair bandwidth delivery to all customers and to maintain the integrity of the Comwave network, Unlimited Usage Plans are governed by our Fair Usage Policy, which is available at  <span className="websiteLink"> www.comwave.net/fairusage.</span> </p>
              <p>You can find the full terms and conditions that apply to all Comwave services at  <span className="websiteLink">www.comwave.net/terms.</span></p>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>

      <Modal size='xl' show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title>Package Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <img src="assets/images/thumnil.png" style={{width:"100%",border:"1px solid #000",borderRadius:"50%"}} alt="" />

            </div>
            <div className="col-md-5">
              <p>300 Mbps includes: </p>
              <ul style={{listStyle:"none"}}>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Download rates as high as 300 Mbps</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Up to 15 Mbps in upload rates.</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Ideal for households with a single person</li>
                <li><i className='fa fa-check fa '   style={{color:"#ff1749"}}/>Unlimited data and devices</li>

              </ul>


            </div>
            <div className="col-md-3">
              <p>The Packages is Best For </p>
              <div className="row">
                <div className="col-md-4">

                <img width={"100%"} src="assets/images/speed (1).png" alt="" />
                <p>Best For <b>Streaming Video </b></p>
                </div>
              </div>


            </div>
          </div>
        </Modal.Body>
       
      </Modal>


    </>
  )
}
