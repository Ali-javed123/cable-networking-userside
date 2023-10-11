import React from 'react'
import Header from '../component/Header'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import LoginSection1 from '../component/Login/LoginSection1'
import LoginSection2 from '../component/Login/LoginSection2'
export default function Login() {
  return (
    <>
        <div class="page-wrapper">
      {/* <Scroll/> */}
        <Header/>
        <main class="site-main">
<LoginSection1/>
<LoginSection2/>
        </main>
        <Footer/>
        <NavbarMobile/>

    </div>
    </>
  )
}
