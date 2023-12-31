import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <>
<footer>
  {/* footer-main-two */}
  <div className="footer-main-two">
    {/* footer-main-two-shape-1 */}
    <div className="footer-main-two-shape-1" />
    {/* footer-main-two-shape-2 */}
    <div className="footer-main-two-shape-2" />
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="00ms">
          {/* footer-widget-about */}
          <div className="footer-widget footer-widget-about">
            {/* footer-widget-logo */}
            <a href="index-2.html" className="footer-widget-logo">
              <img src="assets/images/logo.png" alt="twoet-logo-two" />
            </a>
            {/* footer-widget-text */}
            <p className="footer-widget-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit ipsum sunt a beatae provident similique possimus praesentium doloribus. Dolor nam at consequuntur iusto exercitationem, eaque nihil sint laudantium voluptates.
            </p>
            {/* footer-widget-social */}
            {/* <ul className="footer-widget-social">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul> */}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="150ms">
          {/* footer-widget-links */}
          <div className="footer-widget footer-widget-links">
            {/* footer-widget-title */}
            <h3 className="footer-widget-title">Links</h3>{/* /.footer-widget-title */}
            {/* footer-widget-links-details */}
            <ul className="footer-widget-links-details">
              <li>
              <NavLink className="text-decoration-none" to="/TV">TV</NavLink>
              </li>
              <li>
              <NavLink className="text-decoration-none" to="/Internet">Internet</NavLink>

              </li>
              <li>       
                     <NavLink className="text-decoration-none" to="/Phone">Phone</NavLink>

              </li>
              <li>
              <NavLink className="text-decoration-none" to="/Bundles">Bundles</NavLink>

              </li>
              <li>
              <NavLink className="text-decoration-none" to="/Shop">Shop</NavLink>

              </li>
              <li>
              <li><NavLink to="/ContactUs">ContactUs</NavLink></li>

              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
          {/* footer-widget-contact */}
          <div className="footer-widget footer-widget-contact">
            {/* footer-widget-title */}
            <h3 className="footer-widget-title">Contact</h3>
            {/* footer-widget-contact-details */}
            <ul className="footer-widget-contact-details">
              <li>
                <i className="icon-map" />
                55 main street, 2nd block Melbourne, Australia
              </li>
              <li>
                <i className="icon-mail" />
                <a href="mailto:support@gmail.com">support@gmail.com</a>
              </li>
              <li>
                <i className="icon-uniE90D" />
                <a href="tel:+8898006802">+000 (123) 456 88</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="450ms">
          <div className="footer-widget footer-widget-newsletter">
            <h3 className="footer-widget-title">Newsletter</h3>
            <form action="#">
              <input type="email" name="EMAIL" placeholder="Email Address" />
              <button className="btn btn-bg-white-two"><span>Subscribe<i className="icon-1" /></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer-bottom-two */}
  <div className="footer-bottom-two">
    <div className="container">
      {/* footer-bottom-two-inner */}
      <div className="footer-bottom-two-inner">
        {/* scroll-to-top */}
        <a href="#" className="scroll-to-target scroll-to-top" id="scroll" style={{display: 'block'}}>
          <i className="icon-angle-double-up" />
        </a>
        {/* copyright */}
        <div className="copyright">
          <p>Copyright @WebLink 2033 and Design by HnH Soft Tect Solutions
            <a href="#">WebLink</a> All Rights Reserved
          </p>
        </div>
        {/* footer-widget-two-menu-two */}
        {/* <ul className="footer-widget-two-menu-two list-unstyled">
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="faq.html">FAQs</a>
          </li>
        </ul> */}
      </div>
    </div>
  </div>
</footer>

      
    </>
  )
}
