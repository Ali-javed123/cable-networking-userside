import React from 'react'
import PhoneSection1 from '../component/Phone/PhoneSection1'
import PhoneSection2 from '../component/Phone/PhoneSection2'
import PhoneSection3 from '../component/Phone/PhoneSection3'
import PhoneSection4 from '../component/Phone/PhoneSection4'
import Navbar from '../component/Header'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
export default function Phone() {
  return (
    <>
    
    <div class="page-wrapper">
        <Navbar/>
    <main class="site-main">
    <PhoneSection1/>
    <PhoneSection2/>
    <PhoneSection3/>
    <PhoneSection4/>
    </main>
    <Footer/>
        <NavbarMobile/>
    </div>
    </>
  )
}
