import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
export default function PhoneSection3() {
    

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
    
    
    
    <section>
     <div className="container">
         <div className="row mb-2 mt-2">
             <div className="col-md-6">
                 <img src="assets/images/bundle-save.png" style={{height:"80vh"}} width={"100%"} alt="" />
                 <div className='text-start'>
 
                 <button className='btn btn-small-primary' onClick={handleShow2}>Detail</button>
                 </div>
         
             </div>
             <div className="col-md-6">
                 <div className='text-start'>
 
                 <span className='section-main-title-primery text-start'>Bundle and Save</span>
                 <p className='mt-3 text-start' style={{fontSize:"25px"}}>When you combine Unlimited High-Speed Internet and TV, you'll have access to a huge selection of TV channels, including sports, lifestyle, and family channels.</p>
 
                 <p>Available from only</p>
                 <h3 className='text-start' style={{fontSize:"35px"}}><sup>$</sup>42<sup>.95/mon</sup></h3>
                 <button className='btn btn-small-primary text-start'>Shop Internet And TV Bundles</button>
                 </div>
             </div>
         </div>
     </div>
    </section>
   
<Modal size='md' show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Phone Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row justify-content-center">
      <div className="col-md-12">
 <p>Estimating does exclude pertinent charges. A delivery charge applies relying upon transportation address.</p>
 <p><b>Home Phone</b>:VoIP 911 has specific impediments. All Limitless Calling Plans do exclude calls to the Yukon, Nunavut, N.W.T., The Frozen North and Hawaii.</p>
  <p><b>Long Distance</b>:Lifetime Rate Guarantee is based on competitors’ lowest advertised rate for like services. Comwave will not rate match against charity or internet services, bundled minute plans or prepaid calling cards due to their inaccurate billing criteria. A monthly fee of $1.95 is not included. All Unlimited Plans do not include calls to the Yukon, Nunavut, N.W.T., Alaska and Hawaii.</p>
  <p>Complete agreements that administer the utilization of all Comwave administrations are accessible at <a className='websiteLink' href='#'> www.comwave.net/terms</a></p>
      </div>
    </div>
          
        
          </Modal.Body>
        
        </Modal> 
    </>
  )
}
