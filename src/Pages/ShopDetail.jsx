import React from 'react'
import Navbar from '../component/Header'
import ShopDetailSection1 from '../component/ShopDetail/ShopDetailSection1'
import ShopDetailSection2 from '../component/ShopDetail/ShopDetailSection2'
import ShopDetailSection3 from '../component/ShopDetail/ShopDetailSection3'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function ShopDetail() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
       < ShopDetailSection1/>
       < ShopDetailSection2/>
       < ShopDetailSection3/>
      

         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
