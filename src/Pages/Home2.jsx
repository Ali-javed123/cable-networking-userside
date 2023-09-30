import React from 'react'
import Header from '../component/Header'
import Home2Section1 from '../component/Home2/Home2Section1'
import Home2Section3 from '../component/Home2/Home2Section3'
import Home2Section2 from '../component/Home2/Home2Section2'
import Home2Setion4 from '../component/Home2/Home2Section4'
import Home2Section5 from '../component/Home2/Home2Section5'
import Home2Section6 from '../component/Home2/Home2Section6'
import Home2Section7 from '../component/Home2/Home2Section7'
import Home2Section8 from '../component/Home2/Home2Section8'
import Home2Section9 from '../component/Home2/Home2Section9'
import Home2Section10 from '../component/Home2/Home2Setion10'
import Home2Section11 from '../component/Home2/Home2Setion11'
import Home2Section12 from '../component/Home2/Home2Setion12'
import Home2Section13 from '../component/Home2/Home2Setion13'
import Home2Section14 from '../component/Home2/Home2Section14'

import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Home2() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Header/>
        <main class="site-main">
          <Home2Section1/>
          <Home2Section2/>
          <Home2Section3/>
          <Home2Setion4/>
          <Home2Section5/>
          <Home2Section6/>
          <Home2Section7/>
          <Home2Section8/>
          <Home2Section9/> 
          {/* <Home2Section10/> */}
          {/* <Home2Section11/>  */}
          <Home2Section14/>
          <Home2Section12/>
          <Home2Section13/>
          




        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
