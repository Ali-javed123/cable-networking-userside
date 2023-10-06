import React from 'react'
import Navbar from '../component/Header'
import Home1Section1 from '../component/Home1/Home1Section1'
import Home1Section2 from '../component/Home1/Home1Section2'
import Home1Section3 from '../component/Home1/Home1Section3'
import Home1Section4 from '../component/Home1/Home1Section4'
import Home1Section5 from '../component/Home1/Home1Section5'
import Home1Section6 from '../component/Home1/Home1Section6'
// import Home1Section7 from '../component/Home1/Home1Section7'
import Home1Section13 from '../component/Home1/Home1Section13'
import Home1Section8 from '../component/Home1/Home1Section8'
import Home1Secton9 from '../component/Home1/Home1Section9'
import Home1Section10 from '../component/Home1/Home1Section10'
import Home1Section11 from '../component/Home1/Home1Section11'
import Home1Section12 from '../component/Home1/Home1Section12'
import HomeSection4 from '../component/Home/HomeSection4'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
import Slider from '../component/Home1/Slider'
import Home1Section14 from '../component/Home1/Home1Section14'
import Home1Section15 from '../component/Home2/Home2Section15'
import Home1Section16 from '../component/Home1/Home1Section16'
export default function Home1() {
  return (
    <div >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/> 
        <main class="site-main">
            {/* <Home1Section1/> */}
            <Slider/>
          <Home1Section14/>
            <Home1Section13/>
            <Home1Section16/>
            <Home1Section2/>
            <Home1Section15/>
            <HomeSection4/>
            {/* <Home1Section3/>
            <Home1Section4/>
            <Home1Section5/>
            <Home1Section6/>
            <Home1Section8/>
            <Home1Secton9/>
            <Home1Section10/>
            <Home1Section11/>
            <Home1Section12/> */}


        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </div>
  )
}
