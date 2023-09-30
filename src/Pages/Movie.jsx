import React from 'react'
import Navbar from '../component/Header'
import MovieSection1 from '../component/Movie/MovieSection1'
import MovieSection2 from '../component/Movie/MovieSection2'
import MovieSection3 from '../component/Movie/MovieSection3'
import MovieSection4 from '../component/Movie/MovieSection4'
import MovieSection5 from '../component/Movie/MovieSection5'
import MovieSection6 from '../component/Movie/MovieSection6'
import MovieSection7 from '../component/Movie/MovieSection7'
import MovieSection8 from '../component/Movie/MovieSection8'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function Movie() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
          <MovieSection1/>
          <MovieSection2/>
          <MovieSection3/>
          <MovieSection4/>
          <MovieSection5/>
          <MovieSection6/>
          <MovieSection7/>
          <MovieSection8/>


         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
