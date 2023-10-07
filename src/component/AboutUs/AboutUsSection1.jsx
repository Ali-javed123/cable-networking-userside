import React from 'react'
import { NavLink } from 'react-router-dom'
export default function AboutUsSection1() {
  return (
    <>
   <section className="page-header">
  <div className="page-header-bg" />
  <div className="container">
    {/* page-header-inner */}
    <div className="page-header-inner text-center">
      <img src="assets/images/app-icon.png" alt="" />
      <h2 className="wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">Apps</h2>
      <ul className="page-header-inner-title list-unstyled wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        <li className="arrow-right"><NavLink to="/">Home</NavLink></li>
        <li>
          <h4>Apps</h4>
        </li>
      </ul>
    </div>
  </div>
</section>

    
    </>
  )
}
