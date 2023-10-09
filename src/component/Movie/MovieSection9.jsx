import React, { useState } from 'react'

export default function MovieSection9() {
    const [show,SetShow]=useState("")
  return (
    <>
    <section  style={{marginBottom:"15%",marginTop:'5%'}}>
<div className="container">
  <div className="stepper-wrapper">
    <div className="stepper-item completed">
      <div className="step-counter">1</div>
      <div className="step-name">First</div>
    </div>
    <div className="stepper-item completed">
      <div className="step-counter">2</div>
      <div className="step-name">Second</div>
    </div>
    <div className="stepper-item active">
      <div className="step-counter">3</div>
      <div className="step-name">Third</div>
    </div>
    {/* <div className="stepper-item">
      <div className="step-counter">4</div>
      <div className="step-name">Forth</div>
    </div> */}
  </div>
  <div className="row">
    <div className="col-md-4">
        <img src="assets/images/step1.png" alt="" />
        <p style={{fontSize:"15px",fontWeight:"bold"}}>How Many Devices Can Connect To Your Network At One Time In Step 1?</p>
        <p>Consider smartphones, laptops, tablets, smart speakers, and other electronic devices.</p>
  <div className={show=="one"?"form-check  mt-2 boderBottom":"form-check  mt-2"}>
    <input onClick={()=>SetShow("one")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      1-5
    </label>
  </div>
  <div className={show=="two"?"form-check  mt-2 boderBottom":"form-check  mt-2"}>
    <input onClick={()=>SetShow("two")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      6-11
    </label>
  </div>
  <div className={show=="three"?"form-check  mt-2 boderBottom":"form-check  mt-2"}>
    <input onClick={()=>SetShow("three")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault3">
      12+
    </label>
  </div>

    </div>
    <div className="col-md-4">
       
    <img src="assets/images/step2.png" alt="" />
        <p style={{fontSize:"15px",fontWeight:"bold"}}>Step 2: How Are Internet Use Patterns In Your Home?</p>
        <p>Select all that apply.</p>

  <>

  <div className="form-check mt-3">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
    Internet Explorer and Email
    </label>
  </div>
  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    Connecting Smart Home Devices
    </label>
  </div>
  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked3" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked3">
    Streaming Shows And Movies
    </label>
  </div>
  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked4" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked4">
    Gaming Online
    </label>
  </div>

  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked5" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked5">
    Sharing Large Files
    </label>
  </div>
  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked6" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked6">
    Video Conferencing
    </label>
  </div>
  </>
    </div>
    <div className="col-md-4">
    <img src="assets/images/step3.png" alt="" />
    <p className='mt-2 mb-2' style={{fontSize:'18px',fontWeight:"bold"}}>Step 3 - Your Recommended Speed Is:</p>
    <div className="card shadow" style={{height:"35vh"}}> 
        <div className="card-body">
    <img src="assets/images/30mbps-1.png" alt="" />
    <h3>
    30 Mbps
    </h3>
<p>Starting at</p>
<h3><sup>$</sup>22.95<sup>/mo</sup></h3>
<p>+ one time activation & shipping fee</p>
        </div>
    </div>
<button className='btn-small-primary mt-2' style={{borderRadius:"50px"}}>Get Started</button>
    </div>
  </div>
</div>

    </section>
    </>
  )
}
