import React,{useState} from 'react'
import { NavLink } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

export default function Home3Section4() {
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
<section className="pricing-package-three">
  <div className="pricing-package-one-shape-1" />
  <div className="pricing-package-one-shape-2" />
  <div className="pricing-package-one-shape-3" />
  <div className="pricing-package-one-shape-4" />
  <div className="pricing-package-one-shape-5" />
  <div className="pricing-package-one-shape-6" />
  <div className="pricing-package-one-shape-7" />
  <div className="pricing-package-one-shape-8" />
  <div className="pricing-package-one-shape-9" />
  <div className="container">
    {/* section-title */}
    <div className="section-title text-center">
      <i className="icon-main-icon" />
      <span>Pricing Package</span>
    </div>
    {/* section-main-title */}
    <div className="section-main-title text-center">
      <h2 className="mx-auto">We Provide
        <span className="section-main-title-primery">Popular Pricing</span>
        to Enjoy your Daily Life
      </h2>
    </div>
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="00ms">
        {/* pricing-package-three-box */}
        <div className="pricing-package-three-box">
          {/* box-title */}
          <div className="box-title">
            <h3>Millennial Bundles</h3>
            <div className="box-price text-shape">
              <p><span>$</span>28<span>/month</span>
              </p>
            </div>
          </div>
          {/* box-icon */}
          <div className="box-icon">
          <img style={{height:"7vh"}} src="assets/images/wifi1.png" alt="joinus-two-shape-3" />

            <h3 >Internet</h3>
            <p style={{fontSize:"20px"}}>Unlimited Data</p>
            <i className='fa fa-plus mb-2' style={{fontSize:"25px"}}></i><br/>
            <img src="assets/images/Millennial_TV_Plan.png" alt="" />
            <h3 >Live TV</h3>

            <h3 className='websiteLink'>The Millennial TV Plan</h3>
            <hr />
            <p> Starting from</p>

          </div>
          {/* box-item-list */}
          {/* <ul className="box-item-list">
            <li><i className="icon-angle-double-right" />Internet with <span>100Mbps</span></li>
            <li><i className="icon-angle-double-right" />Unlimited devices (6-8 Devices)</li>
            <li><i className="icon-angle-double-right" />Free Wi-Fi router &amp; prevention</li>
            <li><i className="icon-angle-double-right" />Multiple users </li>
          </ul> */}
          {/* box-price */}
          {/* btn-transparent */}
          <a href="#" className="btn btn-transparent">Get Started<i className="icon-1" /></a>
          <a href="#" onClick={handleShow4} className="btn btn-small-primary w-100 mt-2">Read More<i className="icon-1" /></a>


        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="150ms">
        {/* pricing-package-three-box */}
        <div className="pricing-package-three-box">
          {/* box-title */}
          <div className="box-title">
            <h3>Family & Children Bundles</h3>
            <div className="box-price text-shape">
              <p><span>$</span>47<span>.95/month</span>
              </p>
            </div>
          </div>
          {/* box-icon */}
          <div className="box-icon">
          <img style={{height:"7vh"}} src="assets/images/icon11.png" alt="joinus-two-shape-3" />

            <h3 >Internet</h3>
            <p style={{fontSize:"20px"}}>Unlimited Data</p>
            <i className='fa fa-plus mb-2' style={{fontSize:"25px"}}></i><br/>
            <img src="assets/images/Millennial_TV_Plan.png" alt="" />
            <h3 >Live TV</h3>

            <h3 className='websiteLink'>Family & Children TV Plan</h3>
            <hr />
            <p> Starting from</p>

          </div>
          {/* box-item-list */}
          {/* <ul className="box-item-list">
            <li><i className="icon-angle-double-right" />Internet with <span>100Mbps</span></li>
            <li><i className="icon-angle-double-right" />Unlimited devices (6-8 Devices)</li>
            <li><i className="icon-angle-double-right" />Free Wi-Fi router &amp; prevention</li>
            <li><i className="icon-angle-double-right" />Multiple users </li>
          </ul> */}
          {/* box-price */}
          {/* btn-transparent */}
          <a href="#" className="btn btn-transparent">Get Started<i className="icon-1" /></a>
          <a href="#" onClick={handleShow6} className="btn btn-small-primary w-100 mt-2">Read More<i className="icon-1" /></a>

        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        {/* pricing-package-three-box */}
        <div className="pricing-package-three-box">
          {/* box-title */}
          <div className="box-title">
            <h3>I Love Your TV Bundles</h3>
            <div className="box-price text-shape">
              <p><span>$</span>72<span>.95/month</span>
              </p>
            </div>
          </div>
          {/* box-icon */}
          <div className="box-icon">
          <img style={{height:"7vh"}} src="assets/images/icon11.png" alt="joinus-two-shape-3" />


            <h3 >Internet</h3>
            <p style={{fontSize:"20px"}}>Unlimited Data</p>
            <i className='fa fa-plus mb-2' style={{fontSize:"25px"}}></i><br/>
            <img src="assets/images/Millennial_TV_Plan.png" alt="" />
            <h3 >Live TV</h3>

            <h3 className='websiteLink'>I Love Your TV Plan</h3>
            <hr />
            <p> Starting from</p>

          </div>
          {/* box-item-list */}
          {/* <ul className="box-item-list">
            <li><i className="icon-angle-double-right" />Internet with <span>100Mbps</span></li>
            <li><i className="icon-angle-double-right" />Unlimited devices (6-8 Devices)</li>
            <li><i className="icon-angle-double-right" />Free Wi-Fi router &amp; prevention</li>
            <li><i className="icon-angle-double-right" />Multiple users </li>
          </ul> */}
          {/* box-price */}
          {/* btn-transparent */}
          <a href="#"  className="btn btn-transparent">Get Started<i className="icon-1" /></a>
          <a href="#" className="btn btn-small-primary w-100 mt-2"  onClick={handleShow4}>Read more</a>


        </div>
      </div>
    </div>
      <button className='btn-small-primary text-start mt-4 px-3'>ReadMore</button>
  </div>
</section>
<Modal size='xl' show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Package Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-2">
              <img src="assets/images/tvrounded.png" style={{width:"100%",border:"1px solid #000",borderRadius:"50%",height:'20vh'}} alt="" />

            </div>
            <div className="col-md-6">
              <p className='mb-2' style={{fontSize:'32px'}}>Millennial TV Plan </p>
          <p>With Comwave, you can watch all of your favorite news, sports, and reality TV at home or on the go! The Millennial TV plan includes favorites like CP24, Global, TSN, Sportsnet, ABC, NBC, and many more. It is designed around the preferred TV shows and stations of the modern millennial.</p>


            </div>
                <div className="col-md-4 " style={{borderLeft:"1px solid #000"}}>

               <button className='btn btn-small-primary'>Get Started</button>
                </div>
            
           


          </div>
          <div className="row">
            <div className="col-md-12">
              <img src="assets/images/Millennial-Channels-Slider-Content.png" alt="" />
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
            <div className="col-md-2">
              <img src="assets/images/tvrounded.png" style={{width:"100%",border:"1px solid #000",borderRadius:"50%",height:'20vh'}} alt="" />

            </div>
            <div className="col-md-6">
              <p className='mb-2' style={{fontSize:'32px'}}>I Love TV Plan </p>
          <p>With Comwave, you can watch all of your favorite TV at home and on the go! The I Love TV Plan has almost all of your favorite channels, including those you can't get on Netflix, as well as your favorite shows from news and sports to reality, specialty entertainment, movies, and documentaries. The CP24, Global, CNN, FOX, Sportsnet, TSN, ABC, NBC, E!, Cottage Life, HGTV, OLN, MovieTime, and numerous other channels are all included in the I Love TV Plan.</p>


            </div>
                <div className="col-md-4 " style={{borderLeft:"1px solid #000"}}>

               <button className='btn btn-small-primary'>Get Started</button>
                </div>
            
           


          </div>
          <div className="row">
            <div className="col-md-12">
              <img src="assets/images/I-Love-TV-Channels-Slider-Content.png" alt="" />
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
            <div className="col-md-2">
              <img src="assets/images/tvrounded.png" style={{width:"100%",border:"1px solid #000",borderRadius:"50%",height:'20vh'}} alt="" />

            </div>
            <div className="col-md-6">
              <p className='mb-2' style={{fontSize:'32px'}}>Plan for Family & Kids' TV </p>
          <p>With Comwave, you can watch all of your favorite kids', news, sports, and reality TV at home or on the go! The Family + Kids TV plan includes favorites like Family Channel, Treehouse, CP24, Global, TSN, Sportsnet, ABC, ABC Spark, NBC, and many more. It is designed with TV shows and stations for the entire family.</p>


            </div>
                <div className="col-md-4 " style={{borderLeft:"1px solid #000"}}>

               <button className='btn btn-small-primary'>Get Started</button>
                </div>
            
           


          </div>
          <div className="row">
            <div className="col-md-12">
              <img src="assets/images/Millennial-Channels-Slider-Content.png" alt="" />
              <h3 className='websiteLink'>You can watch ComwaveTV on</h3>
              <img src="assets/images/firetv.png" style={{marginRight:"2%"}} alt="" />
              <img src="assets/images/appstore.png" alt="" />

              <div>

              </div>

            </div>
          </div>
        </Modal.Body>
       
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Bundles Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <p>Pricing does not include applicable taxes. A shipping fee applies depending on shipping address.</p>
              <p>Internet:
This service is available to customers as accessibility and technology permit. A $95 activation fee may apply and a fully refundable device security deposit may be required. *Unlimited usage plans are governed by our Fair Usage Policy available at <span className='websiteLink'>www.comwave.net/fairusage</span>  to ensure fair bandwidth delivery to all customers and  ensure  integrity of the Comwave network.</p>
              <p>You can find the full terms and conditions that apply to all Comwave services at <span className="websiteLink">www.comwave.net/terms.</span></p>
              <p>ComwaveTV:ComwaveTV uses the Amazon Firestick and can be purchased from Comwave or Amazon if you don't already have one. ComwaveTV can also be viewed on any iOS device through the ComwaveTV app, available on the Apple App Store. Channels/content are subject to change without notice and temporary suspension periods may apply. All logos, images, illustrations and trademarks are the property of their respective owners.</p>

              <p>The complete terms and conditions governing the use of all Comwave Services are available at <span className='websiteLink'> www.comwave.net/terms.</span>span</p>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>
      
    </>
  )
}
