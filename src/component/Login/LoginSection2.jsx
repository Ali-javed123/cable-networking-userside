import React from 'react'

export default function LoginSection2() {
  return (
    <>
    
    <section style={{marginBottom:'10%'}}>
        <div className="container">
<div className="row mt-2 justify-content-center">
    <div className="col-md-6">
        <div className="card">
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-md-6">

<img width={"100%"} src="assets/images/logo.png" alt="" />
                    </div>
                    <h3 className='websiteLink'>Login</h3>
                </div>

<form>
 <div style={{textAlign:'left'}}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label e-mail" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
 </div>
 <div style={{textAlign:'left'}}>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 </div>

  <button type="submit" className="btn btn-small-primary">Submit</button>
</form>
            </div>
        </div>

    </div>
</div>


        </div>
    </section>
    </>
  )
}
