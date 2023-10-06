import React from 'react'

export default function Home1Section15() {
  return (
   <section>
    <div className="container">
        <div className="row mb-2 mt-2">
            <div className="col-md-6">
                <img src="assets/images/bundle-save.png" style={{height:"80vh"}} width={"100%"} alt="" />
                <div className='text-start'>

                <button className='btn btn-small-primary'>Detail</button>
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
  )
}
