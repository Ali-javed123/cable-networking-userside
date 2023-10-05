import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <>
<header className="main-header">
  {/* header-menu */}
  <div className="header-menu"> 
    {/* header-logo */}
    <div className="logo-box">
      <a href="index-2.html">
        <img src="assets/images/resources/logo.png" alt="header-logo" />
      </a>
    </div>
    <nav className="navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
         
          {/* <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Pages</a>
            <ul>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>

              <li>
                <a className="dropdown-sub-toggle" href="#">Movies</a>
                <ul className="sub-menu-inner">
                  <li><NavLink to="/Movie">Movies List</NavLink></li>
                  <li><NavLink to="/MovieDetail">Movies Details</NavLink></li>
                </ul>
              </li>
              <li>
                <a className="dropdown-sub-toggle" href="#">Team</a>
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
          </li> */}
          {/* <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Services</a>
            <ul>
              <li><NavLink to="/Service">Services List</NavLink></li>
              <li><NavLink to="/ServiceDetail">Services Details</NavLink></li>
            </ul>
          </li> */}
          {/* <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Shop</a>
            <ul>
              <li><NavLink to="/Shop">Shop Page</NavLink></li>
              <li><NavLink to="/ShopDetail">Shop Details</NavLink></li>
              <li><NavLink to="/Checkout">Checkout</NavLink></li>
            </ul>
          </li> */}
          {/* <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#">Blog</a>
            <ul>
              <li><a href="blog.html">Blog List</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li> */}
         
          
            <li>
            <NavLink className="text-decoration-none" to="/Internet">Internet</NavLink>
          </li>
           <li>
            <NavLink className="text-decoration-none" to="/TV">TV</NavLink>
          </li>
          <li>
            <NavLink className="text-decoration-none" to="/Internet">Phone</NavLink>
          </li>
          <li>
            <NavLink className="text-decoration-none" to="/Internet">Bundles</NavLink>
          </li>
 
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="index-2.html">Support </a>
            <ul>
            <li><NavLink to="/">Speed Finder</NavLink></li>
            <li><NavLink to="/">Help</NavLink></li>
            <li><NavLink to="/">Apps</NavLink></li>
            <li><NavLink to="/">Apps</NavLink></li>
            <li><NavLink to="/Service">Services Status</NavLink></li>
            <li><NavLink to="/ContactUs">ContactUs</NavLink></li>



              {/* <li><NavLink to="/Internet">Home Two</NavLink></li> */}
             
            </ul>
          </li>
          <li>
            <NavLink className="text-decoration-none" to="/Shop">Shop</NavLink>
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
              <a href="checkout.html">
                <i className="icon-shopping-basket" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    {/* header-right */}
    <div className="header-right align-items-center">
      <div className="menu-call">
        <i className="icon-uniE90D" />
        <h4>+222 (345) 88 99</h4>
      </div>
      <div className="menu-btn">
        <a href="contact.html" className="btn btn-bg-primary">Contact Us<i className="icon-1" /></a>
      </div>
      <div className="side-drawer-toggler-btn">
        <span className="line-1" />
        <span className="line-2" />
      </div>
      <div className="header-right-end">
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
