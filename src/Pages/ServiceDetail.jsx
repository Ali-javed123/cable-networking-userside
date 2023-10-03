import React from 'react'
import Navbar from '../component/Header'
import ServiceDetailSection1 from '../component/ServiceDetail/ServiceDetailSection1'
import ServiceDetailSection2 from '../component/ServiceDetail/ServiceDetailSection2'
import ServiceDetailSection3 from '../component/ServiceDetail/ServiceDetailSection3'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function ServiceDetail() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
       < ServiceDetailSection1/>
       < ServiceDetailSection2/>
       < ServiceDetailSection3/>
    

         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
