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
  const [active,setactive]=useState(false)
  const [active2,setactive2]=useState(false)

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
              slidesPerView: 5,
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
              <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow2}>Read more</a><br/>
              <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

          </div>
      </div>
            </SwiperSlide>
          {/* pricing-package-one-box */}
          <SwiperSlide>

          <div className="card shadow" >
          <div className="card-body">
              <img src="assets/images/news-2.png" alt="" />
              <p>News</p>
              <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow3}>Read more</a><br/>
              <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

          </div>
      </div>
    </SwiperSlide>


    <SwiperSlide>

    <div className="card shadow" >
          <div className="card-body">
              <img src="assets/images/education-3.png" alt="" />
              <p>Education</p>
              <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow2}>Read more</a><br/>
              <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

          </div>
      </div>
  </SwiperSlide>
  <SwiperSlide>

<div className="card shadow" >
      <div className="card-body">
          <img src="assets/images/life.png" alt="" />
          <p>LifeStyle</p>
          <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow2}>Read more</a><br/>
          <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

      </div>
  </div>
</SwiperSlide>
<SwiperSlide>

<div className="card shadow" >
      <div className="card-body">
          <img src="assets/images/life.png" alt="" />
          <p>LifeStyle</p>
          <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow2}>Read more</a><br/>
          <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

      </div>
  </div>
</SwiperSlide>
              </Swiper>  
              <div className="row">
                <div className="col-md-12">
                {active?
                <>
                <div className="card">
              <div className="card-body">
              
    <div className="row">
    <div className="col-md-8">
  <h2> À La Carte</h2>
  <p>Select each individual channel that you desire.</p>
  
  <a href="#" onClick={()=>setactive2(!active2)} className='websiteLink' >View Channel <i className='fa fa-arrow-down'/></a>

    </div>
    <div className="col-md-4" style={{borderLeft:"1px solid #000"}}>
      <p>Individual Channels From</p>
      <h2><sup>$</sup>0<sup>.95/mon</sup></h2>
    </div>
  </div>
  {active2?
  <>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/logo001.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel2.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel3.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel4.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel5.png" alt="" />
                  </div>



                </div>
                
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel6.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel7.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel8.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel9.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel10.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel11.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel12.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel13.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel14.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel15.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel16.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel17.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel19.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel20.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel21.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel22.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel23.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel25.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel26.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel27.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel28.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel29.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel30.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel31.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel32.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel33.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel34.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel35.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel36.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel37.png" alt="" />
                  </div>



                </div>
                
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel38.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel39.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel40.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel42.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel41.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel38.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel39.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel40.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel42.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel41.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel43.png" alt="" />
                  </div>

                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel44.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel45.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel46.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel47.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel49.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel50.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel53.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel54.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel55.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel56.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel57.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel5.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel58.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel59.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel56.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel57.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel61.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel63.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel64.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel65.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel66.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel67.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel68.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel69.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel70.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel71.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel72.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel73.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel74.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel75.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel76.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel77.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel78.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel79.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel80.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel81.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel82.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel83.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel84.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel85.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel87.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/ch.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel89.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel90.png" alt="" />
                  </div>



                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel91.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channell92.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel93.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel94.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel98.png" alt="" />
                  </div>



                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel99.png" alt="" />
                  </div>
    
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel100.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img width={'100%'} src="assets/images/channel101.png" alt="" />
                  </div>
                 



                </div>

                
                </>:null           

  }
              </div>
            </div>    
            </>:null

                }
            
                </div>
              </div>
          </div>
      </section>

      <Modal size='xl' show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                  <div className="card shadow" style={{height:"50vh"}}>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Fixer-Upper-2.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> LiftStyle 1</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>24<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>a collection of different lifestyle channels that provide tips for home improvement. Explosive documentaries and enlightening DTOUR explorations. a collection of different lifestyle channels that provide tips for home improvement. Explosive documentaries and enlightening DTOUR explorations.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/lifestyle1channels.png" alt="" />
                                    </div>

                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="col-md-6">
                <div className="card" style={{height:"44vh"}}>
                  <div className="card-body">
                  <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Diners-Drive-Ins-and-Dives-1.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> LiftStyle 2</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>9<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>For the travel enthusiast in your home, Lifestyle 2 offers a variety of channels, including the well-known W Network.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/lifestyle2.png" alt="" />
                                    </div>

                                  </div>

                              </div>
                          </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="card mt-2" style={{height:"44vh"}}>
                  <div className="card-body">
                  <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Island-of-Bryan-2.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> LiftStyle 3</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>14<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>This channel package, which includes the well-known HGTV Canada, was created with home owners in mind.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/lifestyle3-1.png" alt="" />
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

        <Modal size='xl' show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                  <div className="card shadow" >
                      <div className="card-body">
                          <div className="row justify-content-center">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/BNNB-Taking-Stock-1.png" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> News</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>9<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>Enjoy a wide selection of news channels and be up-to-date with all the happenings in the world at anytime of the day.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/newschannels-387x82-1.png" alt="" />
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
