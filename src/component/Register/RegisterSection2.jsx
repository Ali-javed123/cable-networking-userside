import React,{useState} from 'react'
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
export default function RegisterSection2() {
    const [number, Setnumber] = useState("")

    const handleOnChange = (args) => {
      Setnumber(args);
      console.log("number", number)
  
    };
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
                    <h3 className='websiteLink'>Register</h3>
                </div>

<form>
    <div className="row">
        <div className="col-md-6">

<div className="mb-3">
  <label htmlFor="fname" className="form-label " >Fname</label>
  <input type="text" className="form-control" id="fname" aria-describedby="fname" />
</div>
        </div>
        <div className="col-md-6">

  <label htmlFor="lname" className="form-label " >Last Name</label>
  <input type="text" className="form-control" id="lname" aria-describedby="lname" />
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">


    <label htmlFor="exampleInputEmail1" className="form-label e-mail" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-6">
            <label htmlFor="numver">Number</label>
        <ReactPhoneInput
                                        style={{ backgroundColor: "transparent",width:"100% !important" }}  value={number} onChange={handleOnChange}
                                        defaultCountry="nl" enableSearchField />
        </div>
    </div>


  <button type="submit" className="btn btn-small-primary mt-2">Submit</button>
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
