import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function ShopDetailSection2() {
  return (
    <>
<section className="shop-details">
  <div className="container">
    {/* product-single */}
    <div className="product-single">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          {/* product-single-left */}
 
          <Carousel infiniteLoop>
            <div>
            <img src="assets/images/shop/product-2.png" alt="product-2" />

            </div>
            <div>
            <img src="assets/images/shop/product-4.png" alt="product-2" />

            </div>
             <div>
            <img src="assets/images/shop/product-6.png" alt="product-2" />

            </div>
          </Carousel>

        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          {/* product-single-right */}
          <div className="product-single-right">
            {/* product-name */}
            <div className="product-name wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
              <h2>Black Headphone</h2>
            </div>
            {/* product-rating-price */}
            <div className="product-rating-price wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
              <div className="product-rating-star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="product-price">
                <p>$593</p>
              </div>
            </div>
            {/* product-details */}
            <div className="product-details wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
              <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore
                veritatis quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit autfugit, sed quia
                consequuntur magni dolores eos qui ratiluptatem sequi nesciunt porro
                quisquam est, qui dolorem</p>
            </div>
            {/* cart */}
            <form className="cart wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="400ms">
              <div className="qty-container">
                <button className="qty-btn-minus btn-primary btn-rounded mr-1" type="button"><i className="fa fa-chevron-left" /></button>
                <input type="text" name="qty" defaultValue={1} className="input-qty input-rounded" />
                <button className="qty-btn-plus btn-primary btn-rounded ml-1" type="button"><i className="fa fa-chevron-right" /></button>
              </div>
              <button className="btn btn-bg-primary">Add to Cart<i className="icon-1" /></button>
            </form>
            {/* product-categories */}
            <div className="product-categories wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
              <h4>Categories :</h4>
              <p>
                <span>Headphone,</span> TV, Remote
              </p>
            </div>
            {/* product-tag */}
            <div className="product-tag wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="600ms">
              <h4>Tag :</h4>
              <ul className="product-tag-btn">
                <li>
                  <a href="#" className="btn wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="700ms">Electronic</a>
                </li>
                <li>
                  <a href="#" className="btn wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="800ms">Shop</a>
                </li>
                <li>
                  <a href="#" className="btn wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="900ms">Black</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* product-desc-reviews */}
      <div className="product-desc-reviews">
        {/* product-desc-reviews-btn */}
        <ul className="nav tabs product-desc-reviews-btn">
          <li className="wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="300ms">
            <a className="btn btn-transparent active" id="description-tab" data-bs-toggle="tab" href="#description" aria-controls="description">Descriptions<i className="icon-1" /></a>
          </li>
          <li className="wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <a className="btn btn-transparent" id="reviews-tab" data-bs-toggle="tab" href="#reviews" aria-controls="reviews" tabIndex={-1}>Reviews<i className="icon-1" /></a>
          </li>
        </ul>
        {/* tab-content */}
        <div className="tab-content">
          <div className="tab-pane fade active show" id="description" role="tabpanel" aria-labelledby="description-tab">
            <div className="product-desc-wrapper">
              <div className="single-desc">
                <p className="desc-text1 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms">Must explain to you how all this mistaken idea of
                  denouncing pleasure and
                  praising pain was born and I will give you a complete account of the
                  system, and expound the actual teachings of the great explorer of the
                  truth, the master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because those who
                  do not know how to pursue pleasure rationally encounter consequences
                  that are extremely painful. Nor again is there anyone who loves or
                  pursues or desires to obtain pain of itself, because it is pain, but
                  because occasionally
                </p>
                <h3 className="desc-title wow fadeInUp animated  text-start" data-wow-duration="1500ms" data-wow-delay="200ms">Additional information</h3>
                <p className="desc-text2 wow fadeInUp animated text-start" data-wow-duration="1500ms" data-wow-delay="300ms">Circumstances occur in which toil and pain can
                  procure
                  him some great
                  pleasure. To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage from it?
                  But who has any right to find fault with a man who chooses
                </p>
                <ul className="product-desc-advantage wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
                  <li className='text-start'><i className="fas fa-check" />Modern Headphone</li>
                  <li className='text-start'><i className="fas fa-check" />Black Color</li>
                  <li className='text-start'><i className="fas fa-check" />Height Quality Products</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
            <div className="reviews-wrapper">
              <div className="row">
                <div className="col-lg-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                  <div className="comment-area pro-desc-commnet-area">
                    <h3 className="title">Review for this product</h3>
                    <ul className="comment-list">
                      {/*  Comment  */}
                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img src="assets/images/resources/Image-comments.png" alt="Author Images" />
                            </div>
                            <div className="comment-inner">
                              <div className="commenter">
                                <a href="#">
                                  <h6>William L. Jackson</h6>
                                </a>
                                <div className="star">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <div className="comment-text">
                                <p>Quis autem vel eum iure reprehenderit qui
                                  in ea voluptate velit esse molestiae
                                  consequatur qui dolorem eum fugiat
                                  voluptas</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*  Comment  */}
                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img src="assets/images/resources/Image-comments-1.png" alt="Author Images" />
                            </div>
                            <div className="comment-inner">
                              <div className="commenter">
                                <a href="#">
                                  <h6>James M. Stovall</h6>
                                </a>
                                <div className="star">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <div className="comment-text">
                                <p>Quis autem vel eum iure reprehenderit qui
                                  in ea voluptate velit esse molestiae
                                  consequatur qui dolorem eum fugiat
                                  voluptas</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* End Single Comment  */}
                    </ul>
                  </div>
                  {/* End .axil-commnet-area */}
                </div>
                {/* End .col */}
                <div className="col-lg-6 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                  {/* Start Comment Respond  */}
                  <div className="comment-respond pro-des-commend-respond mt--0">
                    <h3 className="title mb--30">Add a Review</h3>
                    <p>Your email address will not be published. Required fields are
                      marked*</p>
                    <div className="rating-wrapper">
                      Your Rating <span className="require">*</span>
                      <div className="reating-inner ml--20">
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                      </div>
                    </div>
                    <form action="https://thegenius.co/html/twoet/assets/inc/sendemail.php">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <input id="name" type="text" placeholder="Full Name" required />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <input type="email" name="EMAIL" placeholder="Email Address" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea name="message" placeholder="Message" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-submit">
                            <button type="submit" id="submit" className="btn btn-bg-primary">Submit
                              Comment<i className="icon-1" /></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End Comment Respond  */}
                </div>
                {/* End .col */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* related-products */}
    <div className="related-products">
      {/* section-main-title */}
      <div className="section-main-title text-center">
        <h2 className="mx-auto">Related Products</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
          {/* product-box */}
          <div className="product-box">
            {/* product-img */}
            <div className="product-img">
              <img src="assets/images/shop/product-4.png" alt="product-4" />
              {/* product-img-inner */}
              <div className="product-img-inner">
                <div className="product-img-inner-link">
                  <a href="checkout.html">
                    <div className="product-play-btn">
                      <i className="icon-shopping-basket" />
                    </div>
                  </a>
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
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="300ms">
          {/* product-box */}
          <div className="product-box">
            {/* product-img */}
            <div className="product-img">
              <img src="assets/images/shop/product-8.png" alt="product-8" />
              {/* product-img-inner */}
              <div className="product-img-inner">
                <div className="product-img-inner-link">
                  <a href="checkout.html">
                    <div className="product-play-btn">
                      <i className="icon-shopping-basket" />
                    </div>
                  </a>
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
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms">
          {/* product-box */}
          <div className="product-box">
            {/* product-img */}
            <div className="product-img">
              <img src="assets/images/shop/product-3.png" alt="product-3" />
              {/* product-img-inner */}
              <div className="product-img-inner">
                <div className="product-img-inner-link">
                  <a href="checkout.html">
                    <div className="product-play-btn">
                      <i className="icon-shopping-basket" />
                    </div>
                  </a>
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
        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="700ms">
          {/* product-box */}
          <div className="product-box">
            {/* product-img */}
            <div className="product-img">
              <img src="assets/images/shop/product-10.png" alt="product-10" />
              {/* product-img-inner */}
              <div className="product-img-inner">
                <div className="product-img-inner-link">
                  <a href="checkout.html">
                    <div className="product-play-btn">
                      <i className="icon-shopping-basket" />
                    </div>
                  </a>
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
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
