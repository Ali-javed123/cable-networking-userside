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
  const [active2,setactive2]=useState(false)

  const [show1,setshow1]=useState(false)
  const [Show1,setShow1]=useState('showall')








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
       <section style={{marginBottom:"10%"}}>

<div className="container">
<Swiper  breakpoints={{
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
}} loop   modules={[Autoplay,Navigation]} className=" ">
  
  
  <SwiperSlide>

<div className="card shadow" >
<div className="card-body">
    <img style={{height:'60px',width:'60px'}} src="assets/images/phone-plan-icon.png" alt="" />
    <p  style={{fontSize:'30px'}} className="mt-2 mb-2 websiteLink">Globle Plan</p>
   <h3><sup>$</sup>34<sup>.95/mon</sup></h3>

    <a href="#" onClick={()=>{setactive1(!active1);handleShow2()}}   className='websiteLink' style={{marginLeft:"10px"}}>View More Content <i className='fa fa-arrow-down'/></a>

</div>
</div>
  </SwiperSlide>

  <SwiperSlide>

<div className="card shadow" >
<div className="card-body">
    <img style={{height:'60px',width:'60px'}} src="assets/images/phone-plan-icon.png" alt="" />
    <p style={{fontSize:'30px'}} className="mt-2 mb-2 websiteLink">Canada Plan</p>
   <h3><sup>$</sup>24<sup>.95/mon</sup></h3>

    <a href="#" onClick={()=>{setactive1(!active1);handleShow3()}}   className='websiteLink' style={{marginLeft:"10px"}}>View More Content <i className='fa fa-arrow-down'/></a>

</div>
</div>
  </SwiperSlide>

  <SwiperSlide>

<div className="card shadow" >
<div className="card-body">
    <img style={{height:'60px',width:'60px'}} src="assets/images/phone-plan-icon.png" alt="" />
    <p style={{fontSize:'30px'}} className="mt-2 mb-2 websiteLink">Enhanced Plan</p>
   <h3><sup>$</sup>19<sup>.19/mon</sup></h3>

   <a href="#" onClick={()=>{setactive1(!active1);handleShow4()}}   className='websiteLink' style={{marginLeft:"10px"}}>View More Content <i className='fa fa-arrow-down'/></a>

</div>
</div>
  </SwiperSlide>



  <SwiperSlide>

<div className="card shadow" >
<div className="card-body">
    <img style={{height:'60px',width:'60px'}} src="assets/images/phone-plan-icon.png" alt="" />
    <p style={{fontSize:'30px'}} className="mt-2 mb-2 websiteLink">Basic</p>
   <h3><sup>$</sup>12<sup>.19/mon</sup></h3>

   <a href="#" onClick={()=>{setactive1(!active1);handleShow5()}}   className='websiteLink' style={{marginLeft:"10px"}}>View More Content <i className='fa fa-arrow-down'/></a>

</div>
</div>
  </SwiperSlide>
{/* pricing-package-one-box */}

<SwiperButtun/>
    </Swiper>  
    



</div>
</section>




<Modal size='xl' show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Package Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row justify-content-center">
      <div className="col-md-10">

      <div className="card" style={{marginBottom:"2%",marginTop:"10px"}}>
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
        <button className="nav-link btn btn-small-primary text-light mr-2" style={{marginRight:"20px"}} onClick={()=>setShow1("showall")} data-bs-toggle="pill" data-bs-target="#pills-showall" type="button" role="tab" aria-controls="pills-showall" aria-selected="true">Features</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light" data-bs-toggle="pill"onClick={()=>setShow1("popular")} data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Add Ons</button>
      </li>

      
    </ul>
    {/* tab-content */}
    <div className="tab-content" id="pills-tabContent">
     

      <div className={Show1=="showall"?"tab-pane fade show active":"tab-pane fade"} id="pills-showall">
        <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
           <ol className="" >
            <li className="text-start  mt-2"><i className="fa fa-check websiteLink"/> Unlimited local Call</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/> My Account Web Access</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Long distance calls between Comwave users are free.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Maintain your existing phone number for free</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Phone ID Blocking.</li>

            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Caller ID with Name.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Call Sending.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Visual Call Pausing.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Improved Phone message.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Call Pausing.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Try not to Upset.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>3-Way Calling.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Speed Dial Memory.</li>


           </ol>
          </div>
      
        </div>
       
      </div>
     
      <div className={Show1=="popular"?"tab-pane fade show active":"tab-pane fade"} id="pills-popular">
      <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
      <div className="row">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>CityFee<sup>TM</sup></p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>1<sup>.95/mon</sup></p>
        </div>
      </div>
      <div className="row mb-2 mt-2">
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header shadow">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span style={{fontSize:"14px",fontWeight:'normal'}}>How does a Vancouver number in Toronto sound?</span> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start" style={{fontSize:"15px"}}>Are high long distance rates preventing your friends and family from contacting you? When you get a CityFree phone number,</p>
        <p className="text-start">
they can call you using a local number and won’t have to worry about long distance.</p>
<p className="text-start" style={{fontSize:"15px",fontWeight:'bold'}}>Here’s how it works …</p>
<p className="text-start">Let’s say you live in Toronto and your phone number is in the 416 area code. However, your family lives in Calgary in the 403 area code. For a low monthly fee,</p>
<p className="text-start">
you can add a CityFree 403 phone number so your family can dial you locally and save a ton on their phone bills. CityFree gives you unlimited incoming calls.</p>
<p className="text-start">
When someone calls your CityFree number, it will ring to your home phone line – which means you don’t need to purchase or install an extra phone line.</p>
<p className="text-start">
Add as many different CityFree numbers as you wish so your friends in Calgary, Montreal and Vancouver can all call you for FREE.</p>
<p className="text-start">CityFree phone numbers are available in over 1,000 Canadian cities and many US Cities.</p>
<h6 className="text-start">Call today to add a CityFree phone number</h6>
      </div>
    </div>
  </div>
  <div className="row mb-2 mt-2">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>Toll Free</p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>0<sup>.99/mon</sup></p>
        </div>
      </div>
  <div className="accordion-item  mb-3">
    <h2 className="accordion-header shadow">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <span style={{fontSize:"14px",fontWeight:'normal'}}>Wouldn't it be great to give friends and family a toll-free number to call you on?</span> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start"> Give friends and family your own personal toll free number. Now they can reach you from anywhere in North America.</p>
        <p className="text-start">It’s FREE for them and just pennies per minute for you.</p>
        <p className="text-start"><b>How it works</b>: We provide you with a toll free number. When someone calls this number we forward those calls to any phone number, such as your home,</p>
        <p className="text-start">office or mobile phone</p>
        <p className="text-start" style={{fontSize:'15px',fontWeight:'bold'}}>Call today to get your Toll Free Number</p>
      </div>
    </div>
  </div>
  
</div>

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
<p className="text-start">Monthly Plan</p>
<p   style={{fontSize:'35px'}} className="mb-2 mt-3 text-start"><sup>$</sup>34<sup>.95/mon</sup></p>
<p style={{fontSize:'20px'}}  className="websiteLink text-start">No Contact</p>
<div className="text-start">

<button className="btn btn-small-primary mt-2 ">Speek To Comwave Sales</button>
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
            <Modal.Title>Slider Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row justify-content-center">
      <div className="col-md-10">

      <div className="card" style={{marginBottom:"2%",marginTop:"10px"}}>
    <div className="card-body">
    
<div className="row">
<div className="col-md-8">
<div className="SideBar">
  <div className="row">
    <div className="col-md-3">
      <img width={"100%"}  src="assets/images/Website-Home-Phone-Images-2.png" alt="" />
    </div>
    <div className="col-md-9">
      <h3>Canada-Wide Home Phone Plan</h3>
      <p>Appreciate limitless neighborhood and practically limitless broad significant distance calling. Call anybody in Canada whenever for 1 low rate. Also, you don't need to pay extra for every one of the elements conventional home and wireless specialist organizations charge you for, for example, guest ID, call pausing, voice message and that's just the beginning..</p>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light mr-2" style={{marginRight:"20px"}} onClick={()=>setShow1("showall")} data-bs-toggle="pill" data-bs-target="#pills-showall" type="button" role="tab" aria-controls="pills-showall" aria-selected="true">Features</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light" data-bs-toggle="pill"onClick={()=>setShow1("popular")} data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Add Ons</button>
      </li>

      
    </ul>
    {/* tab-content */}
    <div className="tab-content" id="pills-tabContent">
     

      <div className={Show1=="showall"?"tab-pane fade show active":"tab-pane fade"} id="pills-showall">
        <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
           <ol className="" >
            <li className="text-start  mt-2"><i className="fa fa-check websiteLink"/> Unlimited local Call</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/> My Account Web Access</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Long distance calls between Comwave users are free.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Maintain your existing phone number for free</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Phone ID Blocking.</li>

            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Caller ID with Name.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Call Sending.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Visual Call Pausing.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Improved Phone message.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Call Pausing.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Try not to Upset.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>3-Way Calling.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Speed Dial Memory.</li>


           </ol>
          </div>
      
        </div>
       
      </div>
     
      <div className={Show1=="popular"?"tab-pane fade show active":"tab-pane fade"} id="pills-popular">
      <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
      <div className="row">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>CityFee<sup>TM</sup></p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>1<sup>.95/mon</sup></p>
        </div>
      </div>
      <div className="row mb-2 mt-2">
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header shadow">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span style={{fontSize:"14px",fontWeight:'normal'}}>How does a Vancouver number in Toronto sound?</span> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start" style={{fontSize:"15px"}}>Are high long distance rates preventing your friends and family from contacting you? When you get a CityFree phone number,</p>
        <p className="text-start">
they can call you using a local number and won’t have to worry about long distance.</p>
<p className="text-start" style={{fontSize:"15px",fontWeight:'bold'}}>Here’s how it works …</p>
<p className="text-start">Let’s say you live in Toronto and your phone number is in the 416 area code. However, your family lives in Calgary in the 403 area code. For a low monthly fee,</p>
<p className="text-start">
you can add a CityFree 403 phone number so your family can dial you locally and save a ton on their phone bills. CityFree gives you unlimited incoming calls.</p>
<p className="text-start">
When someone calls your CityFree number, it will ring to your home phone line – which means you don’t need to purchase or install an extra phone line.</p>
<p className="text-start">
Add as many different CityFree numbers as you wish so your friends in Calgary, Montreal and Vancouver can all call you for FREE.</p>
<p className="text-start">CityFree phone numbers are available in over 1,000 Canadian cities and many US Cities.</p>
<h6 className="text-start">Call today to add a CityFree phone number</h6>
      </div>
    </div>
  </div>
  <div className="row mb-2 mt-2">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>Toll Free</p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>0<sup>.99/mon</sup></p>
        </div>
      </div>
  <div className="accordion-item  mb-3">
    <h2 className="accordion-header shadow">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <span style={{fontSize:"14px",fontWeight:'normal'}}>Wouldn't it be great to give friends and family a toll-free number to call you on?</span> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start"> Give friends and family your own personal toll free number. Now they can reach you from anywhere in North America.</p>
        <p className="text-start">It’s FREE for them and just pennies per minute for you.</p>
        <p className="text-start"><b>How it works</b>: We provide you with a toll free number. When someone calls this number we forward those calls to any phone number, such as your home,</p>
        <p className="text-start">office or mobile phone</p>
        <p className="text-start" style={{fontSize:'15px',fontWeight:'bold'}}>Call today to get your Toll Free Number</p>
      </div>
    </div>
  </div>
  
</div>

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
<p className="text-start">Monthly Plan</p>
<p   style={{fontSize:'35px'}} className="mb-2 mt-3 text-start"><sup>$</sup>24<sup>.95/mon</sup></p>
<p style={{fontSize:'20px'}}  className="websiteLink text-start">No Contact</p>
<div className="text-start">

<button className="btn btn-small-primary mt-2 ">Speek To Comwave Sales</button>
</div>

</div>
</div>

    </div>
  </div>    
 
  
      </div>
    </div>
          
        
          </Modal.Body>
        
        </Modal>


  
        <Modal size='xl' show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <Modal.Title>Slider Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row justify-content-center">
      <div className="col-md-10">

      <div className="card" style={{marginBottom:"2%",marginTop:"10px"}}>
    <div className="card-body">
    
<div className="row">
<div className="col-md-8">
<div className="SideBar">
  <div className="row">
    <div className="col-md-3">
      <img width={"100%"}  src="assets/images/Website-Home-Phone-Images.png" alt="" />
    </div>
    <div className="col-md-9">
      <h3>Enhanced Home Phone Plan</h3>
      <p>Don't you can't stand it when you believe you're getting an incredible arrangement on your home telephone, however at that point you need to pay extra for every one of the significant highlights? With Comwave's Upgraded plan, you'll appreciate limitless nearby calls and 13 highlights FREE. You'll get phone message, call pausing, guest ID, and something else for 1 low month to month rate.</p>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light mr-2" style={{marginRight:"20px"}} onClick={()=>setShow1("showall")} data-bs-toggle="pill" data-bs-target="#pills-showall" type="button" role="tab" aria-controls="pills-showall" aria-selected="true">Features</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light" data-bs-toggle="pill"onClick={()=>setShow1("popular")} data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Add Ons</button>
      </li>

      
    </ul>
    {/* tab-content */}
    <div className="tab-content" id="pills-tabContent">
     

      <div className={Show1=="showall"?"tab-pane fade show active":"tab-pane fade"} id="pills-showall">
        <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
           <ol className="" >
            <li className="text-start  mt-2"><i className="fa fa-check websiteLink"/> Unlimited local Call</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/> My Account Web Access</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Long distance calls between Comwave users are free.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Maintain your existing phone number for free</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Phone ID Blocking.</li>

            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Caller ID with Name.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Call Sending.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Visual Call Pausing.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Improved Phone message.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Call Pausing.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Try not to Upset.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>3-Way Calling.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Speed Dial Memory.</li>


           </ol>
          </div>
      
        </div>
       
      </div>
     
      <div className={Show1=="popular"?"tab-pane fade show active":"tab-pane fade"} id="pills-popular">
      <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
      <div className="row">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>CityFee<sup>TM</sup></p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>1<sup>.95/mon</sup></p>
        </div>
      </div>
      <div className="row mb-2 mt-2">
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header shadow">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span style={{fontSize:"14px",fontWeight:'normal'}}>How does a Vancouver number in Toronto sound?</span> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start" style={{fontSize:"15px"}}>Are high long distance rates preventing your friends and family from contacting you? When you get a CityFree phone number,</p>
        <p className="text-start">
they can call you using a local number and won’t have to worry about long distance.</p>
<p className="text-start" style={{fontSize:"15px",fontWeight:'bold'}}>Here’s how it works …</p>
<p className="text-start">Let’s say you live in Toronto and your phone number is in the 416 area code. However, your family lives in Calgary in the 403 area code. For a low monthly fee,</p>
<p className="text-start">
you can add a CityFree 403 phone number so your family can dial you locally and save a ton on their phone bills. CityFree gives you unlimited incoming calls.</p>
<p className="text-start">
When someone calls your CityFree number, it will ring to your home phone line – which means you don’t need to purchase or install an extra phone line.</p>
<p className="text-start">
Add as many different CityFree numbers as you wish so your friends in Calgary, Montreal and Vancouver can all call you for FREE.</p>
<p className="text-start">CityFree phone numbers are available in over 1,000 Canadian cities and many US Cities.</p>
<h6 className="text-start">Call today to add a CityFree phone number</h6>
      </div>
    </div>
  </div>
  <div className="row mb-2 mt-2">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>Toll Free</p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>0<sup>.99/mon</sup></p>
        </div>
      </div>
  <div className="accordion-item  mb-3">
    <h2 className="accordion-header shadow">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <span style={{fontSize:"14px",fontWeight:'normal'}}>Wouldn't it be great to give friends and family a toll-free number to call you on?</span> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start"> Give friends and family your own personal toll free number. Now they can reach you from anywhere in North America.</p>
        <p className="text-start">It’s FREE for them and just pennies per minute for you.</p>
        <p className="text-start"><b>How it works</b>: We provide you with a toll free number. When someone calls this number we forward those calls to any phone number, such as your home,</p>
        <p className="text-start">office or mobile phone</p>
        <p className="text-start" style={{fontSize:'15px',fontWeight:'bold'}}>Call today to get your Toll Free Number</p>
      </div>
    </div>
  </div>
  
</div>

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
<p className="text-start">Monthly Plan</p>
<p   style={{fontSize:'35px'}} className="mb-2 mt-3 text-start"><sup>$</sup>19<sup>.95/mon</sup></p>
<p style={{fontSize:'20px'}}  className="websiteLink text-start">No Contact</p>
<div className="text-start">

<button className="btn btn-small-primary mt-2 ">Speek To Comwave Sales</button>
</div>

</div>
</div>

    </div>
  </div>    
 
  
      </div>
    </div>
          
        
          </Modal.Body>
        
        </Modal>




        <Modal size='xl' show={show5} onHide={handleClose5}>
          <Modal.Header closeButton>
            <Modal.Title>Slider Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row justify-content-center">
      <div className="col-md-10">

      <div className="card" style={{marginBottom:"2%",marginTop:"10px"}}>
    <div className="card-body">
    
<div className="row">
<div className="col-md-8">
<div className="SideBar">
  <div className="row">
    <div className="col-md-3">
      <img width={"100%"}  src="assets/images/enhanced (1).png" alt="" />
    </div>
    <div className="col-md-9">
      <h3>Basic Home Phone Plan</h3>
      <p>There's no great explanation for why you ought to pay a fortune for a home telephone line. Attempt our Essential arrangement and appreciate limitless neighborhood calls at the most reduced rates that anyone could hope to find. Furthermore, there is no charge to keep your ongoing telephone number.</p>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light mr-2" style={{marginRight:"20px"}} onClick={()=>setShow1("showall")} data-bs-toggle="pill" data-bs-target="#pills-showall" type="button" role="tab" aria-controls="pills-showall" aria-selected="true">Features</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link btn btn-small-primary text-light" data-bs-toggle="pill"onClick={()=>setShow1("popular")} data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Add Ons</button>
      </li>

      
    </ul>
    {/* tab-content */}
    <div className="tab-content" id="pills-tabContent">
     

      <div className={Show1=="showall"?"tab-pane fade show active":"tab-pane fade"} id="pills-showall">
        <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
           <ol className="" >
            <li className="text-start  mt-2"><i className="fa fa-check websiteLink"/> Unlimited local Call</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/> My Account Web Access</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Free significant distance calling between Comwave clients.</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Maintain your existing phone number for free</li>
            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Keep your ongoing telephone number at no additional charge.</li>

            <li className="text-start mt-3"><i className="fa fa-check websiteLink"/>Caller ID Block.</li>

           </ol>
          </div>
      
        </div>
       
      </div>
     
      <div className={Show1=="popular"?"tab-pane fade show active":"tab-pane fade"} id="pills-popular">
      <div className="row mt-3">
          <div className=" col-md-12" data-wow-duration="1500ms" data-wow-delay="00ms">
            {/* popular-movies-two-box */}
      <div className="row">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>CityFee<sup>TM</sup></p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>1<sup>.95/mon</sup></p>
        </div>
      </div>
      <div className="row mb-2 mt-2">
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header shadow">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span style={{fontSize:"14px",fontWeight:'normal'}}>How does a Vancouver number in Toronto sound?</span> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start" style={{fontSize:"15px"}}>Are high long distance rates preventing your friends and family from contacting you? When you get a CityFree phone number,</p>
        <p className="text-start">
they can call you using a local number and won’t have to worry about long distance.</p>
<p className="text-start" style={{fontSize:"15px",fontWeight:'bold'}}>Here’s how it works …</p>
<p className="text-start">Let’s say you live in Toronto and your phone number is in the 416 area code. However, your family lives in Calgary in the 403 area code. For a low monthly fee,</p>
<p className="text-start">
you can add a CityFree 403 phone number so your family can dial you locally and save a ton on their phone bills. CityFree gives you unlimited incoming calls.</p>
<p className="text-start">
When someone calls your CityFree number, it will ring to your home phone line – which means you don’t need to purchase or install an extra phone line.</p>
<p className="text-start">
Add as many different CityFree numbers as you wish so your friends in Calgary, Montreal and Vancouver can all call you for FREE.</p>
<p className="text-start">CityFree phone numbers are available in over 1,000 Canadian cities and many US Cities.</p>
<h6 className="text-start">Call today to add a CityFree phone number</h6>
      </div>
    </div>
  </div>
  <div className="row mb-2 mt-2">
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}>Toll Free</p>
        </div>
        <div className="col-6">
          <p className="text-start" style={{fontSize:"25px",color:"#000"}}><sup>$</sup>0<sup>.99/mon</sup></p>
        </div>
      </div>
  <div className="accordion-item  mb-3">
    <h2 className="accordion-header shadow">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <span style={{fontSize:"14px",fontWeight:'normal'}}>Wouldn't it be great to give friends and family a toll-free number to call you on?</span> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="text-start"> Give friends and family your own personal toll free number. Now they can reach you from anywhere in North America.</p>
        <p className="text-start">It’s FREE for them and just pennies per minute for you.</p>
        <p className="text-start"><b>How it works</b>: We provide you with a toll free number. When someone calls this number we forward those calls to any phone number, such as your home,</p>
        <p className="text-start">office or mobile phone</p>
        <p className="text-start" style={{fontSize:'15px',fontWeight:'bold'}}>Call today to get your Toll Free Number</p>
      </div>
    </div>
  </div>
  
</div>

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
<p className="text-start">Monthly Plan</p>
<p   style={{fontSize:'35px'}} className="mb-2 mt-3 text-start"><sup>$</sup>12<sup>.95/mon</sup></p>
<p style={{fontSize:'20px'}}  className="websiteLink text-start">No Contact</p>
<div className="text-start">

<button className="btn btn-small-primary mt-2 ">Speek To Comwave Sales</button>
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
