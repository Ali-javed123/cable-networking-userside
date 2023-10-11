import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarMobile() {
  return (
    <>
    		<div className="mobile-nav-two-wrapper">
  {/* mobile-nav__overlay */}
  <div className="mobile-nav-two-overlay mobile-nav-two-toggler" />
  {/* mobile-nav-content */}
  <div className="mobile-nav-two-content">
    <span className="mobile-nav-two-close mobile-nav-two-toggler"><i className="fa fa-times" /></span>
    {/* logo-box */}
    <div className="logo-box">
      <a href="index-2.html" aria-label="logo image">
      <img src="assets/images/logo.png" alt="header-logo" />

      </a>
    </div>
    {/* mobile-nav-two-container */}
    <div className="mobile-nav-two-container">
      {/* main-menu-list */}
      <ul className="main-menu-list">
   
     
        <li>
        <NavLink className="text-decoration-none" to="/TV">TV</NavLink>

        </li>

        <li>
        <NavLink className="text-decoration-none" to="/Internet">Internet</NavLink>


        </li>
        <li>
        <NavLink className="text-decoration-none" to="/Bundles">Bundles</NavLink>



        </li>
        <li>
        <NavLink className="text-decoration-none" to="/Phone">Phone</NavLink>



        </li>
        <li className="dropdown">
          <a href="#">Support </a>
          <ul>
            <li><NavLink to="/SpeedFinder">Speed Finder</NavLink></li>
            <li><NavLink to="/Apps">Apps</NavLink></li>
            <li><NavLink to="/Service">Services Status</NavLink></li>
            <li><NavLink to="/ContactUs">ContactUs</NavLink></li>



              {/* <li><NavLink to="/Internet">Home Two</NavLink></li> */}
             
            </ul>
        </li>
        <li>
        <NavLink className="text-decoration-none" to="/Shop">Shop</NavLink>


        </li>
      </ul>
    </div>
    {/* mobile-nav-contact */}
    <ul className="mobile-nav-two-contact list-unstyled">
      <li>
        {/* mobile-menu-call */}
        <div className="mobile-menu-call">
          <i className="icon-uniE90D" />
          <a href="#">+222 (345) 88 99</a>
        </div>
      </li>
      <li>
        {/* mobile-menu-btn */}
        <div className="mobile-menu-btn">
          <a href="contact.html" className="btn btn-bg-white-two">Contact Us<i className="icon-1" /></a>
        </div>
      </li>
    </ul>
    {/* mobile-nav-top */}
    <div className="mobile-nav-two-top">
      {/* mobile-nav-social */}
      <ul className="mobile-nav-two-social">
        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
        <li><a href="#"><i className="fab fa-twitter" /></a></li>
        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
        <li><a href="#"><i className="fab fa-instagram" /></a></li>
      </ul>
    </div>
  </div>
</div>
  <div className="side-drawer-wrapper">
    {/* side-drawer-overlay */}
    <div className="side-drawer-overlay side-drawer-toggler" />
    <div className="side-drawer-content">
      <a href="#" className="side-drawer-close side-drawer-toggler">
        <i className="fa fa-times" />
      </a>
      {/* logo-box */}
      <div className="logo-box">
        <a href="index-2.html" aria-label="logo image"><img src="assets/images/resources/header-two-logo.png" alt="Insuco" /></a>
      </div>
      {/* side-drawer-widget */}
      <div className="side-drawer-widget">
        <h3 className="side-drawer-widget-title">About</h3>
        <p className="side-drawer-widget-text">We denounce with righteous indignation and dislike men who
          beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that
          they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to
          those fail in their duty</p>
      </div>
      {/* mobile-nav-top */}
      <div className="mobile-nav-top">
        {/* mobile-nav-social */}
        <ul className="mobile-nav-social mobile-nav-three-social">
          <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="#"><i className="fab fa-twitter" /></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
          <li><a href="#"><i className="fab fa-instagram" /></a></li>
        </ul>
      </div>
      {/* side-drawer-gallery */}
      <div className="side-drawer-gallery">
        <h3 className="side-drawer-gallery-title">Gallery</h3>
        <ul className="list-unstyled side-drawer-gallery-details">
          <li>
            <a href="assets/images/resources/popular-movie-four-img-1.jpg" className="img-popup">
              <img src="assets/images/resources/popular-movie-four-img-1.jpg" alt="popular-movie-four-img-1" />
            </a>
          </li>
          <li>
            <a href="assets/images/resources/popular-movie-six-img-4.jpg" className="img-popup">
              <img src="assets/images/resources/popular-movie-six-img-4.jpg" alt="popular-movie-six-img-4" />
            </a>
          </li>
          <li>
            <a href="assets/images/resources/popular-movie-six-img-3.jpg" className="img-popup">
              <img src="assets/images/resources/popular-movie-six-img-3.jpg" alt="popular-movie-six-img-3" />
            </a>
          </li>
          <li>
            <a href="assets/images/resources/popular-movie-six-img-1.jpg" className="img-popup">
              <img src="assets/images/resources/popular-movie-six-img-1.jpg" alt="popular-movie-six-img-1" />
            </a>
          </li>
          <li>
            <a href="assets/images/resources/popular-movie-four-img-2.jpg" className="img-popup">
              <img src="assets/images/resources/popular-movie-four-img-2.jpg" alt="popular-movie-four-img-2" />
            </a>
          </li>
          <li>
            <a href="assets/images/resources/popular-movie-four-img-3.jpg" className="img-popup">
              <img src="assets/images/resources/popular-movie-four-img-3.jpg" alt="popular-movie-four-img-3" />
            </a>
          </li>
        </ul>
      </div>
      {/* mobile-nav-contact */}
      <ul className="mobile-nav-contact list-unstyled">
        <li>
          {/* mobile-menu-call */}
          <div className="mobile-menu-call">
            <i className="icon-uniE90D" />
            <a href="#">+222 (345) 88 99</a>
          </div>
        </li>
        <li>
          {/* mobile-menu-btn */}
          <div className="theme-btn">
            <a href="about.html" className="btn btn-bg-white-two">Learn More Us<i className="icon-1" /></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/* search-popup */}
  <div className="search-popup">
    {/* search-popup-overlay */}
    <div className="search-popup-overlay search-toggler" />
    {/* search-popup-content */}
    <div className="search-popup-content search-popup-content-two">
      <span className="search-popup-close search-toggler"><i className="fa fa-times" /></span>
      <form action="#">
        <label htmlFor="search" className="sr-only">search here</label>
        <input type="text" id="search" placeholder="Search Here....." />
        <button type="submit" aria-label="search submit" className="thm-btn">
          <span><i className="icon-search" /></span>
        </button>
      </form>
    </div>
  </div>

      
    </>
  )
}
