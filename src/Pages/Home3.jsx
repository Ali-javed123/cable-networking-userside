import React from 'react'
import Navbar from '../component/Header'
import Home3Section1 from '../component/Home3/Home3Section1'
import Home3Section2 from '../component/Home3/Home3Section2'
import Home3Section3 from '../component/Home3/Home3Section3'
import Home3Section4 from '../component/Home3/Home3Section4'
import Home3Section5 from '../component/Home3/Home3Section5'
import Home3Section6 from '../component/Home3/Home3Section6'
import Home3Section7 from '../component/Home3/Home3Section7'
import Home3Section8 from '../component/Home3/Home3Section8'
import Home3Section9 from '../component/Home3/Home3Section9'
import Home3Section10 from '../component/Home3/Home3Section10'

import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Home3() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
          <Home3Section1/>
          <Home3Section2/>
          <Home3Section3/>
          <Home3Section4/>
          <Home3Section5/>
          <Home3Section6/>
          <Home3Section7/>
          <Home3Section8/>
          <Home3Section9/>
          <Home3Section10/>
          
          




        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
