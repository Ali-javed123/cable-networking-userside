import React from 'react'
import Navbar from '../component/Header'
import Home4Section1 from '../component/Home4/Home4Section1'
import Home4Section2 from '../component/Home4/Home4Section2'
import Home4Section3 from '../component/Home4/Home4Section3'
import Home4Section4 from '../component/Home4/Home4Section4'
import Home4Section5 from '../component/Home4/Home4Section5'
import Home4Section6 from '../component/Home4/Home4Section6'
import Home4Section7 from '../component/Home4/Home4Section7'
import Home4Section8 from '../component/Home4/Home4Section8'
import Home4Section9 from '../component/Home4/Home4Section9'
import Home4Section10 from '../component/Home4/Home4Section10'
import Home4Section11 from '../component/Home4/Home4Section11'
import Home4Section12 from '../component/Home4/Home4Section12'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Home4() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
          <Home4Section1/>
          <Home4Section2/>
          <Home4Section3/>
          <Home4Section4/>
          <Home4Section5/>
          <Home4Section6/>
          <Home4Section7/>
          <Home4Section8/>
          <Home4Section/>


        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
