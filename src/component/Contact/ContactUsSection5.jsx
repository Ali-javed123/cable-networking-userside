import React from 'react'
import { useState } from 'react'

export default function ContactUsSection5() {
    const [Show,SetShow]=useState("Apps")
  return (
    <>
    <section>
        <div className="container">
            <div className="row justify-content-center" style={{marginBottom:"7%"}}>
                <div className="col-md-8">
                            <div className="row mb-2 mt-2 justify-content-center">
                                <div className="col-md-3">
                                    <button onClick={()=>SetShow("TV")} className='btn btn-small-primary'>Help</button>
                                </div>
                                <div className="col-md-3">
                                    <button onClick={()=>SetShow("Apps")} className='btn btn-small-primary'>Bussiness Apps</button>
                                </div>
                            </div>
                    <div className="card mt-3 mb-2 shadow" >
                        <div className="card-body">
                            {Show=="TV"?

                            <div className="row mt-3" >
                                <div className="col-md-6">
                                <p>For Help & Support with Your Services <a className='websiteLink' style={{textDecoration:"none"}} href="#">Click Here</a></p>
                                </div>
                                
                            </div>:Show=="Apps"?
                              <div className="row">
                            
                              <div className="col-md-12">
                                  <p>At Comwave, we want to make sure that your concerns are handled and resolved to your satisfaction. Your business is important to us. We therefore encourage you to reach out to us to resolve your concerns by                                 <p>For Help & Support with Your Services <a className='websiteLink' style={{textDecoration:"none"}} href="#">Click Here</a></p> .</p>
                                  <p>If after completing this step you are still not satisfied with the resolution, you can reach out to the Office of the Ombudsman.</p>
                                  <div class="accordion" id="accordionExample">
  <div class="accordion-item shadow mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <img src="assets/images/question-icon.png " alt="" /> What is the Office of the Ombudsman
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p className='text-start'>The Office of the Ombudsman is the final appeal authority in resolving customer complaints that remain unresolved.

Customer complaints are a vital source of feedback. Based on customer feedback, the Ombudsman may make recommendations to improve operations or products and services.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item shadow mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <img src="assets/images/question-icon.png " alt="" /> What is the Office of the Ombudsman
      How to submit a complaint to the Office of the Ombudsman?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
  <p className='text-start'><a href="#" style={{textDecoration:"none"}} className='website'>Click here</a> and fill in the form.</p>.
      </div>
    </div>
  </div>
  <div class="accordion-item shadow">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <img src="assets/images/question-icon.png " alt="" />  How long will it take to process my complaint?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
  <p>We will acknowledge your complaint within 24-72 hours.</p>
  <p>If none of the above has resolved your concerns, you may contact the Commissioner for Complaints for Telecommunications Services (CCTS).</p>
      </div>
    </div>
  </div>

  <div class="accordion-item shadow mt-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreed" aria-expanded="false" aria-controls="collapseThreed">
      <img src="assets/images/question-icon.png " alt="" />  Commission for Complaints for Telecom-television Services (CCTS)
      </button>
    </h2>
    <div id="collapseThreed" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
  <p>Commission for Complaints for Telecom-television Services (CCTS) CCTS is an independent agency whose mandate is to resolve complaints of consumers about their telecom and TV services, and complaints of small business customers about their telecom services, free of charge. If you have a complaint about your telephone, wireless, internet or TV service, you must first try to resolve it directly with your service provider. If you have done so and have been unable to reach a satisfactory resolution, CCTS may be able to help you. To learn more about CCTS, you may visit its website at<a href='#' className='websiteLink' style={{textDecoration:"none"}}> www.ccts-cprst.ca</a> or call toll-free at <a href='#' className='websiteLink' style={{textDecoration:"none"}}>1-888-221-1687</a> </p>
  <div className="row">
    <div className="col-md-2">

  <img src="assets/images/ccts.png" width={"100%"} alt="" />
    </div>
  </div>
      </div>
    </div>
  </div>

  

  
</div>
                             
                              </div>
                          </div>:null
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    </>
  )
}
