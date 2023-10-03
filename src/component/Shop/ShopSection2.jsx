import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function ShopSection2() {
    const [show,setshow]=useState("")
  return (
    <>
<section className="shop">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-12 col-sm-12">
        {/* sidebar */}
        <div className="sidebar">
          {/* shop-search-box */}
          <div className="shop-search-box wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h4>Search</h4>
            <div className="shop-search">
              <input type="search" placeholder="Keywords" />
              <i className="icon-search" />
            </div>
          </div>
          {/* shop-category */}
          <div className="shop-category wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h4>Category</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="btn-read-more">Broadband</a>
              </li>
              <li>
                <a href="#" className="btn-read-more">Satellite TV</a>
              </li>
              <li>
                <a href="#" className="btn-read-more">Router</a>
              </li>
              <li>
                <a href="#" className="btn-read-more">Media &amp; Internet</a>
              </li>
              <li>
                <a href="#" className="btn-read-more">Headphone</a>
              </li>
            </ul>
          </div>
          {/* shop-filter-price-box */}
          <div className="shop-filter-price-box wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h4 className="shop-filter-price-title">Filter by Price</h4>
            <div className="bar">
              <div className="bar-inner count-bar" data-percent="50%">
                <div className="count-text-1">$0</div>
                <div className="count-text-2">$89</div>
              </div>
            </div>
            <a href="#" className="btn btn-bg-primary">Apply<i className="icon-1" /></a>
          </div>
          {/* shop-services-box */}
          <div className="shop-services-box wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <div className="shop-services-box-img">
              <img src="assets/images/services/sidebar-img-1.jpg" alt="sidebar-img-1" />
            </div>
            <div className="shop-services-box-shape" />
            <div className="shop-services-box-inner">
              <div className="shop-services-box-inner-details">
                <div className="icon">
                  <img src="assets/images/shapes/joinus-shape.png" alt="shape-1" />
                </div>
                <div className="text">
                  <p>
                    <span>$25/</span>per month
                  </p>
                </div>
              </div>
              <div className="section-main-title">
                <h2>Need Any <span className="text-shape">Internet</span> Services ?</h2>
              </div>
              <NavLink to="/Service" className="btn btn-bg-white">Get A Quote<i className="icon-1" /></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-12 col-sm-12">
        {/* shop-right */}
        <div className="shop-right">
          {/* shop-title-box */}
          <div className="shop-title-box">
            <p>Showing 1–9 of 17 results</p>
            <button onClick={()=>setshow("internet")} className='btn btn-bg-primary'>Internet</button>
            <button onClick={()=>setshow("tv")} className='btn btn-bg-primary'>TV</button>

            <select name="pets" id="pet-select">
              <option value>Sort by</option>
              <option value="fra">popularity</option>
              <option value="ger">average rating</option>
              <option value="ita">price: low to high</option>
              <option value="ita">price: high to low</option>
              <option value="ita">latest</option>
            </select>
          </div>
          {show=="internet"?

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-1.png" alt="product-1" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <NavLink to="/ShopDetail">
                      Black Headphone
                    </NavLink>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-2.png" alt="product-2" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6><a href="#">Black-wireless Router</a></h6>
                  <h6>$23</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-3.png" alt="product-3" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6><a href="#">TV Remote-control</a></h6>
                  <h6>$38</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-4.png" alt="product-4" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6><a href="#">Wan-wlan-technology</a></h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-5.png" alt="product-5" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6><a href="#">Black-router</a></h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-6.png" alt="product-6" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Red Headphone
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-7.png" alt="product-7" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Remote-control-tv
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-8.png" alt="product-8" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Black-wireless Router
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-9.png" alt="product-9" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Black Smart Camera
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-10.png" alt="product-10" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Smart Camera
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-11.png" alt="product-11" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Remote-control-tv
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/shop/product-12.png" alt="product-12" />
                  {/* popular-movie-one-img-inner */}
                  <div className="product-img-inner">
                    <div className="product-img-inner-link">
                      <NavLink to="/Checkout">
                        <div className="product-play-btn">
                          <i className="icon-shopping-basket" />
                        </div>
                      </NavLink>
                      <NavLink to="/ShopDetail">
                        <div className="product-play-btn">
                          <i className="fas fa-expand" />
                        </div>
                      </NavLink>
                      <a href="#">
                        <div className="product-play-btn">
                          <i className="icon-arrow-left-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* popular-movie-one-title */}
                <div className="product-title">
                  <h6>
                    <a href="#">
                      Black Headphone
                    </a>
                  </h6>
                  <h6>$58</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>:show=="tv"?

<div className="row">
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-1.png" alt="product-1" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <NavLink to="/ShopDetail">
          Black Headphones
        </NavLink>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-2.png" alt="product-2" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6><a href="#">Black-wireless Router</a></h6>
      <h6>$23</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-3.png" alt="product-3" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6><a href="#">TV Remote-control</a></h6>
      <h6>$38</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-4.png" alt="product-4" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6><a href="#">Wan-wlan-technology</a></h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-5.png" alt="product-5" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6><a href="#">Black-router</a></h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-6.png" alt="product-6" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Red Headphone
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-7.png" alt="product-7" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Remote-control-tv
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-8.png" alt="product-8" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Black-wireless Router
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-9.png" alt="product-9" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Black Smart Camera
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-10.png" alt="product-10" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Smart Camera
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-11.png" alt="product-11" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Remote-control-tv
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/shop/product-12.png" alt="product-12" />
      {/* popular-movie-one-img-inner */}
      <div className="product-img-inner">
        <div className="product-img-inner-link">
          <NavLink to="/Checkout">
            <div className="product-play-btn">
              <i className="icon-shopping-basket" />
            </div>
          </NavLink>
          <NavLink to="/ShopDetail">
            <div className="product-play-btn">
              <i className="fas fa-expand" />
            </div>
          </NavLink>
          <a href="#">
            <div className="product-play-btn">
              <i className="icon-arrow-left-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* popular-movie-one-title */}
    <div className="product-title">
      <h6>
        <a href="#">
          Black Headphone
        </a>
      </h6>
      <h6>$58</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  </div>
</div>
</div>:null
          }
          {/* page-numbers */}
          <div className="page-numbers">
            <ul>
              <li className="page-numbers-one">
                <a href="#"><span>1</span></a>
              </li>
              <li className="page-numbers-two">
                <a href="#"><span>2</span></a>
              </li>
              <li className="page-numbers-line">
                <span />
              </li>
              <li className="page-numbers-next">
                <a href="#" className="btn-read-more">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
