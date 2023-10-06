import React from 'react'
import Navbar from '../component/Header'
import HomeSection1 from '../component/Home/HomeSection1'
import HomeSection2 from '../component/Home/HomeSection2'
import HomeSection3 from '../component/Home/HomeSection3'
import HomeSection4 from '../component/Home/HomeSection4'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
import Slider from '../component/Home2/Slider'
export default function Home() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
          <HomeSection1/>
          {/* <HomeSection1/> */}
          <HomeSection2/>
          <HomeSection3/>
          <HomeSection4/>

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
