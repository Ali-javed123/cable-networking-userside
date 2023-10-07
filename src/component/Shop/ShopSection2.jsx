import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';

export default function ShopSection2() {
  const [show, setShow] = useState("internet");

  const handleClose = () => setshow1(false);
  const handleShow = () => setshow1(true);
    const [show1,setshow1]=useState("")


    const handleClose2 = () => setshow2(false);
    const handleShow2 = () => setshow2(true);
      const [show2,setshow2]=useState("")


      const handleClose3 = () => setshow3(false);
    const handleShow3 = () => setshow3(true);
      const [show3,setshow3]=useState("")
  return (
    <>
<section className="shop">
  <div className="container">
    <div className="row">
   
      <div className="col-lg-12 col-md-12 col-sm-12">
        {/* shop-right */}
        <div className="shop-right">
          {/* shop-title-box */}
          <div className="shop-title-box">
            <p>Showing 1–9 of 17 results</p>
            <button onClick={()=>setShow("internet")} className='btn btn-bg-primary'>Internet</button>
            <button onClick={()=>setShow("tv")} className='btn btn-bg-primary'>TV</button>

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
                  <img src="assets/images/Fast-Plan-5.png" alt="product-1" />
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
                    The Fast Plan
                    </NavLink>
                  </h6>
                  <h6>$22.95/month</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <button className='btn btn-small-primary mb-2 mt-2'>Select Plan</button>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Plan Details
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
   <ul style={{listStyle:"none"}}>
    <li className="text-start">30 Mbps download speeds.</li>
    <li className="text-start">2 Mbps upload speeds.</li>
    <li className="text-start">Great for 1-2 users and moderate</li>
    <li className="text-start">internet usage.</li>
    <li className="text-start">Internet modem included.</li>
   </ul>
      </div>
    </div>
  </div>
</div>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/Fast-Plan-5.png" alt="product-1" />
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
                    The Super Fast Plan
                    </NavLink>
                  </h6>
                  <h6>$69.95/month</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <button className='btn btn-small-primary mb-2 mt-2'>Select Plan</button>
           <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Plan Details
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <ul style={{listStyle:"none"}}>
    <li className="text-start">300 Mbps download speeds.</li>
    <li className="text-start">15 Mbps upload speeds..</li>
    <li className="text-start">Great for 3-4 users and regular internet usage.</li>
    <li className="text-start">Internet modem included.</li>
   </ul>
    </div>
  </div>
</div>


                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              {/* product-box */}
              <div className="product-box">
                {/* popular-movie-one-img */}
                <div className="product-img">
                  <img src="assets/images/Fast-Plan-5.png" alt="product-1" />
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
                    The Crazy Fast Plan
                    </NavLink>
                  </h6>
                  <h6>$74.95/month</h6>
                </div>
                {/* product-rating-star */}
                <div className="product-rating-star">
                  <button className='btn btn-small-primary'>Select Plan</button>
        <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Plan Details
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <ul style={{listStyle:"none"}}>
    <li className="text-start">1,000 Mbps (1Gb) download speeds.</li>
    <li className="text-start">30 Mbps upload speeds.</li>
    <li className="text-start">
Great for 5+ users and heavy internet usage.</li>
    <li className="text-start">Internet modem included.</li>
   </ul>
    </div>
  </div>
</div>


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
      <img src="assets/images/Millennial-TV-Plan-8.png" alt="product-1" />
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
        The Millennial TV Plan
        </NavLink>
      </h6>
      <h6>$19.95/month</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
      <button className='btn btn-small-primary mb-2 mt-2'>Select Buttun</button>
    <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
    Plan Details
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
    <div className="accordion-body">
    <ul style={{listStyle:"none"}}>
    <li className="text-start">Built around the modern millennial’s TV preferences.</li>
    <li className="text-start">News, sports and reality TV on CP24, Global, Sportsnet, TSN, ABC, NBC and more.</li>
    <li className="text-start">
    One Amazon Fire Stick TV device is needed for each TV you’d like to watch on..</li>
    <li className="text-start"><a style={{textDecoration:"none "}} className='websiteLink' onClick={handleShow} href="#">View all channels here.</a></li>
   </ul>
    </div>
  </div>
</div>

    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  {/* product-box */}
  <div className="product-box">
    {/* popular-movie-one-img */}
    <div className="product-img">
      <img src="assets/images/Millennial-TV-Plan-8.png" alt="product-2" />
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
      <h6><a href="#">The Family & Kids TV Plan</a></h6>
      <h6>$24.95/month</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
    <button className='btn btn-small-primary mb-2 mt-2'>Select Plan</button>

    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Plan Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      <ul style={{listStyle:"none"}}>
    <li className="text-start">TV shows and channels for everyone in the family.</li>
    <li className="text-start">Kids, news, sports & reality TV on Treehouse, Family Channel, ABC, TSN and more.</li>
    <li className="text-start">
    One Amazon Fire Stick TV device is needed for each TV you’d like to watch on.</li>
    <li className="text-start"><a onClick={handleShow2} style={{textDecoration:"none "}} className='websiteLink' href="#">View all channels here.</a></li>
   </ul>
      </div>
    </div>
  </div>
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
      <h6>$49.95/month</h6>
    </div>
    {/* product-rating-star */}
    <div className="product-rating-star">
    <button className='btn btn-small-primary mb-2 mt-2'>Select Plan</button>

    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Plan Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      <ul style={{listStyle:"none"}}>
    <li className="text-start">Built with all of your favourite channels – news, sports, reality, kids and family, movies, documentaries and more</li>
    <li className="text-start">CP24, Global, CNN, FOX, TSN, Sportsnet, ABC, NBC, E!, Cottage Life, HGTV, OLN, MovieTime and so many more.</li>
    <li className="text-start">
    One Amazon Fire Stick TV device is needed for each TV you’d like to watch on.</li>
    <li className="text-start"><a style={{textDecoration:"none "}}  onClick={handleShow3}  className='websiteLink' href="#">View all channels here.</a></li>
   </ul>
      </div>
    </div>
  </div>
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
<Modal show={show1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <img width={"100%"} src="assets/images/Millennial-TV-Channels-with-Comwave-600x544.png" alt="" sizes="" srcset="" />
            </div>
          </div>
        </Modal.Body>
      
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <img width={"100%"} src="assets/images/Family-Kids-TV-Channels-with-Comwave-600x862.png" alt="" sizes="" srcset="" />
            </div>
          </div>
        </Modal.Body>
      
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <img width={"100%"} src="assets/images/I-Love-TV-Channels-with-Comwave-4-387x1024.png" alt="" sizes="" srcset="" />
            </div>
          </div>
        </Modal.Body>
      
      </Modal>

    
    </>
  )
}
