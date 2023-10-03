import React from 'react'
import Navbar from '../component/Header'
import ShopSection1 from '../component/Shop/ShopSection1'
import ShopSection2 from '../component/Shop/ShopSection2'
import ShopSection3 from '../component/Shop/ShopSection3'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Shop() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
       < ShopSection1/>
       < ShopSection2/>
       < ShopSection3/>
      

         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
