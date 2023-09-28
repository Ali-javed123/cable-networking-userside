import React from 'react'
import Navbar from '../component/Navbar'
import Home1Section1 from '../component/Home1/Home1Section1'
import Home1Section2 from '../component/Home1/Home1Section2'
import Home1Section3 from '../component/Home1/Home1Section3'
import Home1Section4 from '../component/Home1/Home1Section4'
import Home1Section5 from '../component/Home1/Home1Section5'
import Home1Section6 from '../component/Home1/Home1Section6'
// import Home1Section7 from '../component/Home1/Home1Section7'
import Home1Section8 from '../component/Home1/Home1Section8'
import Home1Secton9 from '../component/Home1/Home1Secton9'
import Home1Section10 from '../component/Home1/Home1Section10'
import Home1Section11 from '../component/Home1/Home1Section11'
import Home1Section12 from '../component/Home1/Home1Section12'
import NavbarMobile from '../component/NavbarMobile'
export default function Home1() {
  return (
    < >
        	<div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div>
    <div class="page-wrapper">
        <Navbar/>
        <main class="site-main">
            <Home1Section1/>
            <Home1Section2/>
            <Home1Section3/>
            <Home1Section4/>
            <Home1Section5/>
            <Home1Section6/>
            <Home1Section8/>
            <Home1Secton9/>
            <Home1Section10/>
            <Home1Section11/>
            <Home1Section12/>


        </main>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
