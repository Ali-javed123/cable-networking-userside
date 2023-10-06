import React from 'react'
import Navbar from '../component/Header'
import ServiceSection1 from '../component/Service/ServiceSection1'
import ServiceSection2 from '../component/Service/ServiceSection2'
import ServiceSection3 from '../component/Service/ServiceSection3'
import ServiceSection4 from '../component/Service/ServiceSection4'
import ServiceSection5 from '../component/Service/ServiceSection5'
import ServiceSection6 from '../component/Service/ServiceSection6'
import ServiceSection7 from '../component/Service/ServiceSection7'
import HomeSection4 from '../component/Home/HomeSection4'
import ServiceSection9 from '../component/Service/ServiceSection9'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Service() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
       < ServiceSection1/>
       <ServiceSection9/>
       <HomeSection4/>
       {/* < ServiceSection2/> */}
       {/* < ServiceSection3/> */}
       {/* < ServiceSection4/> */}
       {/* < ServiceSection5/> */}
       {/* < ServiceSection6/> */}
       {/* < ServiceSection7/> */}


         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
