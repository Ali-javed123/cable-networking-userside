import React from 'react'
import Header from '../component/Header'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import RegisterSection1 from '../component/Register/RegisterSection1'
import RegisterSection2 from '../component/Register/RegisterSection2'
export default function Register() {
  return (
    <>
        <div class="page-wrapper">
      {/* <Scroll/> */}
        <Header/>
        <main class="site-main">
<RegisterSection1/>
<RegisterSection2/>
        </main>
        <Footer/>
        <NavbarMobile/>

    </div>
    </>
  )
}
