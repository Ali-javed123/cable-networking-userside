import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ServiceDetailSection1() {
  return (
    <>
           <section className="page-header">
  <div className="page-header-bg-three" />
  <div className="container">
    {/* page-header-inner */}
    <div className="page-header-inner text-center">
      <h2 className="wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">Fiber Broadband</h2>
      <ul className="page-header-inner-title list-unstyled wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        <li className="arrow-right"><NavLink to="/">Home</NavLink></li>
        <li>
          <h4>Fiber Broadband</h4>
        </li>
      </ul>
    </div>
  </div>
</section>

    
    </>
  )
}
