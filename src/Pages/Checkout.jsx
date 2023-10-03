import React from 'react'
import Navbar from '../component/Header'
import CheckoutSection1 from '../component/Checkout/CheckoutSection1'
import CheckoutSection2 from '../component/Checkout/CheckoutSection2'
import CheckoutSection3 from '../component/Checkout/CheckoutSection3'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Checkout() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
       < CheckoutSection1/>
       < CheckoutSection2/>
       < CheckoutSection3/>
    

         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
