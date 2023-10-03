import React from 'react'
import Navbar from '../component/Header'
import ContactSection1 from '../component/Contact/ContactSection1'
import ContactSection2 from '../component/Contact/ContactSection2'
import ContactSection3 from '../component/Contact/ContactSection3'
import ContactSection4 from '../component/Contact/ContactSection4'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Contact() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
       < ContactSection1/>
       < ContactSection2/>
       <ContactSection3/>
       <ContactSection4/>

    

         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
