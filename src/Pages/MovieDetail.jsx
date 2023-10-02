import React from 'react'
import Navbar from '../component/Header'
import MovieDetailSection1 from '../component/MovieDetail/MovieDetailSection1'
import MovieDetailSection2 from '../component/MovieDetail/MovieDetailSection2'
import MovieDetailSection3 from '../component/MovieDetail/MovieDetailSection3'
import MovieDetailSection4 from '../component/MovieDetail/MovieDetailSection4'
import NavbarMobile from '../component/NavbarMobile'
import Footer from '../component/Footer'
import Scroll from '../component/Scroll'
export default function MovieDetail() {
  return (
    < >
        	{/* <div class="custom-cursor-one cursor-one"></div>
	<div class="custom-cursor-two cursor-two"></div> */}
    <div class="page-wrapper">
      {/* <Scroll/> */}
        <Navbar/>
        <main class="site-main">
          <MovieDetailSection1/>
          <MovieDetailSection2/>
          <MovieDetailSection3/>
          <MovieDetailSection4/>
          

         

        </main>
        <Footer/>
        <NavbarMobile/>

    </div>

      
    </>
  )
}
