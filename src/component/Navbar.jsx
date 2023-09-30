import React from 'react'
import {NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
<header className="main-header-two ">
  {/* header-menu-two */}
  <div className="header-menu-two">
    {/* logo-box */}
    <div className="logo-box">
      <a href="index-2.html">
        <img src="assets/images/resources/header-two-logo.png" alt="header-logo" />
      </a>
    </div>
    <nav className="navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav-two me-auto">
          {/* arr */}
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Home </a>
            <ul>
              <li><NavLink to="/">Home One</NavLink></li>
              <li><NavLink to="/Home2">Home Two</NavLink></li>
              <li><NavLink to="/Home3">Home Three</NavLink></li>
              <li><NavLink to="/Home4">Home Four</NavLink></li>
              <li>
                <a className="dropdown-sub-toggle" href="#">Header Styles</a>
                <ul className="sub-menu-two-inner">
                  <li><a href="index-2.html">Header One</a></li>
                  <li><a href="index2.html">Header Two</a></li>
                  <li><a href="index3.html">Header Three</a></li>
                  <li><a href="index4.html">Header Four</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Pages</a>
            <ul>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>

              <li><a className="dropdown-sub-toggle" href="#">Movies</a>
                <ul className="sub-menu-inner">
                <li><NavLink to="/Movie">Movies List</NavLink></li>

                  <li><a href="movies-details.html">Movies Details</a></li>
                </ul>
              </li>
              <li><a className="dropdown-sub-toggle" href="#">Team</a>
                <ul className="sub-menu-inner">
                  <li><a href="team-member.html">Team Member</a></li>
                  <li><a href="team-details.html">Team Details</a></li>
                </ul>
              </li>
              <li><a href="package.html">Package</a></li>
              <li><a href="career.html">Career</a></li>
              <li><a href="faq.html">FAQs</a></li>
              <li><a href="testimonial.html">Testimonial</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Services</a>
            <ul>
              <li><a href="services.html">Services List</a></li>
              <li><a href="services-details.html">Services Details</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Shop</a>
            <ul>
              <li><a href="shop-page.html">Shop Page</a></li>
              <li><a href="shop-details.html">Shop Details</a></li>
              <li><a href="checkout.html">Checkout</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Blog</a>
            <ul>
              <li><a href="blog.html">Blog List</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a className="text-decoration-none" href="contact.html">Contact</a>
          </li>
          <li>
            <div className="menu-search-box">
              <a href="#" className="search-toggler">
                <i className="icon-search" />
              </a>
            </div>
          </li>
          <li>
            <div className="shopping-cart-box">
              <a href="checkout.html" className="nav-link">
                <i className="icon-shopping-basket" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    {/* header-two-right */}
    <div className="header-two-right align-items-center">
      <div className="menu-btn-1">
        <a href="contact.html" className="btn btn-signup">Signup<i className="icon-1" /></a>
      </div>
      <div className="menu-btn-2">
        <a href="contact.html" className="btn btn-small-primary-two">Contact Us<i className="icon-1" /></a>
      </div>
      <div className="side-drawer-toggler-btn side-drawer-toggler-two-btn">
        <span className="line-1" />
        <span className="line-2" />
      </div>
      <div className="header-right-end header-two-right-end">
        <span className="line-1" />
        <span className="line-2" />
        <span className="line-3" />
      </div>
    </div>
  </div>
</header>

      
    </>
  )
}
