import React from 'react'
import { NavLink } from 'react-bootstrap'
export default function ShopDetailSection1() {
  return (
    <>
 <section className="page-header">
  <div className="page-header-bg" />
  <div className="container">
    {/* page-header-inner */}
    <div className="page-header-inner text-center">
      <h2 className="wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">Shop Details
      </h2>
      <ul className="page-header-inner-title list-unstyled wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
        <li className="arrow-right"><NavLink to="/">Home</NavLink></li>
        <li>
          <h4>Shop Details</h4>
        </li>
      </ul>
    </div>
  </div>
</section>

    </>
  )
}
