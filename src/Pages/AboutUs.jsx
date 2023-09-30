import React from 'react'
import Navbar from '../component/Header'
import AboutUsSection1 from '../component/AboutUs/AboutUsSection1'
import AboutUsSection2 from '../component/AboutUs/AboutUsSection2'
import AboutUsSection3 from '../component/AboutUs/AboutUsSection3'
import AboutUsSection4 from '../component/AboutUs/AboutUsSection4'
import AboutUsSection5 from '../component/AboutUs/AboutUsSection5'
import AboutUsSection6 from '../component/AboutUs/AboutUsSection6'
import AboutUsSection7 from '../component/AboutUs/AboutUsSection7'
import AboutUsSection8 from '../component/AboutUs/AboutUsSection8'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function AboutUs() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
          <AboutUsSection1/>
          <AboutUsSection2/>
          <AboutUsSection3/>
          <AboutUsSection4/>
          <AboutUsSection5/>
          <AboutUsSection6/>
          <AboutUsSection7/>
          <AboutUsSection8/>
         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
