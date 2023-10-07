import React from 'react'
import { useState } from 'react'

export default function AboutUsSection9() {
    const [Show,SetShow]=useState("Apps")
  return (
    <>
    <section>
        <div className="container">
            <div className="row justify-content-center" style={{marginBottom:"7%"}}>
                <div className="col-md-8">
                    <div className="card mt-3 mb-2 shadow" >
                        <div className="card-body">
                            <div className="row mb-2 mt-2 justify-content-center">
                                <div className="col-md-3">
                                    <button onClick={()=>SetShow("TV")} className='btn btn-small-primary'>Comwave TV</button>
                                </div>
                                <div className="col-md-3">
                                    <button onClick={()=>SetShow("Apps")} className='btn btn-small-primary'>Bussiness Apps</button>
                                </div>
                            </div>
                            {Show=="TV"?

                            <div className="row">
                                <div className="col-md-6">
                                    <img width={"100%"} src="assets/images/app-mobile.jpg" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h3>Comwave TV Mobile App</h3>
                                    <p>Allows you to enjoy live and recorded TV on your Apple iPhone or iPad. So relax and watch TV in any corner of the house or even in the backyard. You must subscribe to a Comwave TV package and connect to your home WIFI  to watch.</p>
                                </div>
                            </div>:Show=="Apps"?
                              <div className="row">
                              <div className="col-md-6">
                                  <img width={"100%"} src="assets/images/app-ComwaveControl-min-1.jpg" alt="" />
                              </div>
                              <div className="col-md-6">
                                  <h3>Comwave WebEx</h3>
                                  <p>Our business phone and collaboration App. To download Comwave WebEx <a className='websiteLink' style={{textDecoration:"none"}} href="#">click here.</a></p>
                                  <h3>Comwave Control</h3>
                                  <p>If you don’t have WebEx and need to control your calling features use, Comwave Control. Download by clicking one of the buttons below.</p>
                                  <div className="row mt-2">
                                    <div className="col-md-6">
                                  <img width={"100%"} src="assets/images/app-store.png" alt="" />

                                    </div>
                                    <div className="col-md-6">
                                  <img width={"100%"} src="assets/images/Download_GooglePlay.png" alt="" />

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
