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
    
    
    
    
      
      const [show5, setShow5] = useState(false);
      
      const handleClose5 = () => setShow5(false);
      const handleShow5 = () => setShow5(true);
      
      const [show6, setShow6] = useState(false);
    
      const handleClose6 = () => setShow6(false);
      const handleShow6 = () => setShow6(true);

   
      const [show7, setShow7] = useState(false);
    
      const handleClose7 = () => setShow7(false);
      const handleShow7 = () => setShow7(true);
    
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
              <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow4}>Read more</a><br/>
              <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

          </div>
      </div>
  </SwiperSlide>
  <SwiperSlide>

<div className="card shadow" >
      <div className="card-body">
          <img src="assets/images/life.png" alt="" />
          <p>Music</p>
          <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow5}>Read more</a><br/>
          <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

      </div>
  </div>
</SwiperSlide>




<SwiperSlide>

<div className="card shadow" >
      <div className="card-body">
          <img src="assets/images/sports.png" alt="" />
          <p>Sports</p>
          <a href="#" className="btn btn-small-primary mt-2 mb-2"  onClick={handleShow7}>Read more</a><br/>
          <a href="#" onClick={()=>setactive(!active)} className='websiteLink' style={{marginLeft:"10px"}}>View Channel Content <i className='fa fa-arrow-down'/></a>

      </div>
  </div>
</SwiperSlide>
<SwiperButtun/>
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
                <div className="card mt-2">
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

        <Modal size='md' show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
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

        <Modal size='md' show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                  <div className="card shadow" >
                      <div className="card-body">
                          <div className="row justify-content-center">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Oak-Island-2.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> Education</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>19<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>Your favourite educational channels including Discovery, Animal Planet and many more.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/educationchannels-354x85-1.png" alt="" />
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


        <Modal size='md' show={show5} onHide={handleClose5}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                  <div className="card shadow" >
                      <div className="card-body">
                          <div className="row justify-content-center">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Teen-Mom-2-2.png" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> Music</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>4<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>If you're looking for educational channels, you've come to the right place! Check out your favorite Discovery Channel, Animal Planet, and more!.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/Music-1.png" alt="" />
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

        


        <Modal size='xl' show={show6} onHide={handleClose6}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                  <div className="card shadow" >
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/ComWave_desktop_JANUARY2023_V3.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-6" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> Hollywood Suite</p>    
                                      </div>
                                      <div className="col-6" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>4<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>films that defined the '70s, '80s, '90s and '2000s. Watch 4 HD channels of uncut, commercial-free movies.  </p>
                                    <img width={"100%"}  className='mt-2' src="assets/images/Hollywood-Suite-1.png" alt="" />
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
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Super-Channel-Updated.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-6" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> Super Channel</p>    
                                      </div>
                                      <div className="col-6" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>9<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>Super Channel is the best of the best when it comes to premium entertainment. With 4 different channels, you can find a wide variety of movies, shows, documentaries, esports, and more - all unedited and free of ads.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/Super-Channel-1.png" alt="" />
                                    </div>

                                  </div>

                              </div>
                          </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="card mt-2">
                  <div className="card-body">
                  <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/STARZ-Updated.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> STARZ</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>9<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>Watch Obsessable STARZ Original series and your favourite classic movies.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/Starz-Logo-Website.png" alt="" />
                                    </div>

                                  </div>

                              </div>
                          </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="card mt-2">
                  <div className="card-body">
                  <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'38vh'}} src="assets/images/Crave_173w-x-215-The-First-Lady-LogoRight-1.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p>Crave</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>20<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>Enjoy exclusive access to the most captivating movies, must-see HBO and Showtime series, and groundbreaking Crave Originals. Plus, you can choose how and when you watch with 6 channels at your fingertips. </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/Crave-MoviesHBO-1.png" alt="" />
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







        <Modal size='xl' show={show7} onHide={handleClose7}>
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
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/Sportsnet-Updated.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> SportSnet+</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>29<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>Enjoy everything Sportsnet with this incredible package plus Wild TV for those who enjoy hunting, fishing, and motorsports.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/sportsnetchannels.png" alt="" />
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
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/TSN-Updated.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> TSN+</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>19<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>As Canada’s Sports Leader, TSN’s five feeds deliver the biggest events in sports including the NFL, NBA, CFL, MLS, regional NHL hockey, World Juniors, Grand Slam Tennis and so much more.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/tsnpluschannels-1-300x21-1.png" alt="" />
                                    </div>

                                  </div>

                              </div>
                          </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="card mt-2">
                  <div className="card-body">
                  <div className="row">
                              <div className="col-md-3">
                                  <img width={"100%"} style={{height:'30vh'}} src="assets/images/All-Sports.jpg" alt="" />

                              </div>

                              <div className="col-md-9">
                                  <div className="row justify-content-center">
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                            
                                    <p> All Sports</p>    
                                      </div>
                                      <div className="col-4" style={{borderBottom:"1px solid #000"}}>
                                          <p><sup>$</sup>19<sup>.95/mon</sup></p>
                                      </div>
                                      
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">

                                    <p>This package encompasses a wide range of various sports from hockey to fishing. Whether you’re into the great outdoors or classic sports, we’ve got you covered with this package.  </p>
                                    <img width={"100%"} className='mt-2' src="assets/images/allsportschannels-300x21-1.png" alt="" />
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
