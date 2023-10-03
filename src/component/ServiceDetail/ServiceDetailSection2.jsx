import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ServiceDetailSection2() {
  return (
    <>
<section className="fiber-broadband">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12">
        {/* sidebar */}
        <div className="sidebar">
          {/* fiber-broadband-category */}
          <div className="fiber-broadband-category wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h4>Services Category</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="btn btn-transparent">Fiber Broadband<i className="icon-1" /></a>
              </li>
              <li>
                <a href="#" className="btn btn-transparent">Satellite TV<i className="icon-1" /></a>
              </li>
              <li>
                <a href="#" className="btn btn-transparent">Cinema &amp; Dreama<i className="icon-1" /></a>
              </li>
              <li>
                <a href="#" className="btn btn-transparent">Media &amp; Internet<i className="icon-1" /></a>
              </li>
              <li>
                <a href="#" className="btn btn-transparent">TV &amp; Streaming<i className="icon-1" /></a>
              </li>
              <li>
                <a href="#" className="btn btn-transparent">Wi-fi Internet<i className="icon-1" /></a>
              </li>
            </ul>
          </div>
          {/* fiber-broadband-services-box */}
          <div className="fiber-broadband-services-box wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <div className="fiber-broadband-services-box-img">
              <img src="assets/images/services/sidebar-img-1.jpg" alt="sidebar-img-1" />
            </div>
            <div className="fiber-broadband-services-box-shape" />
            <div className="fiber-broadband-services-box-inner">
              <div className="fiber-broadband-services-box-inner-details">
                <div className="icon">
                  <img src="assets/images/shapes/joinus-shape.png" alt="joinus-shape" />
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
          {/* fiber-broadband-social */}
          <div className="fiber-broadband-social wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12">
        {/* fiber-broadband-right */}
        <div className="fiber-broadband-right">
          {/* fiber-broadband-image-1 */}
          <div className="fiber-broadband-image-1 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <img src="assets/images/services/fiber-broadband-img-1.jpg" alt="fiber-broadband-img-1" />
          </div>
          {/* fiber-broadband-title-1 */}
          <div className="fiber-broadband-title-1 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h2>Service Overview</h2>
            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque p quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur adipisci velit sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
          {/* fiber-broadband-title-2 */}
          <div className="fiber-broadband-title-2 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <h3>Benefit Of Broadband Services</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt quisquam
              dolorem sit amet </p>
          </div>
          {/* list-item */}
          <ul className="list-item wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <li>
              <i className="icon-right-arrow" />
              <p>Pay 12 Months Bill and get a new
                Connection completely Free.</p>
            </li>
            <li>
              <i className="icon-right-arrow" />
              <p>Pay 3 Months Bill and get 10% Discount on
                OTC.</p>
            </li>
            <li>
              <i className="icon-right-arrow" />
              <p>Providing one of the faster internet</p>
            </li>
            <li>
              <i className="icon-right-arrow" />
              <p>Reliable for both game and TV users</p>
            </li>
          </ul>
          {/* fiber-broadband-image-2 */}
          <div className="fiber-broadband-image-2 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <img src="assets/images/services/fiber-broadband-image-2.jpg" alt="fiber-broadband-image-2" />
          </div>
          {/* fiber-broadband-faq */}
          <div className="fiber-broadband-faq wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
            <div className="fiber-broadband-faq-title">
              <h3>Frequently Asked Questions </h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis
                praesentiu voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate none provident, similique sunt in culpa
                qui officia deserunt mollitia laborum dolorum fuga.</p>
            </div>
            <div className="fiber-broadband-faq-accordion">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                {/* accordion-item */}
                <div className="accordion-item">
                  {/* accordion-header */}
                  <h6 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      How you get our internet services?
                    </button>
                  </h6>
                  {/* accordion-collapse */}
                  <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>At vero eos et accusamus iusto odio dignissimos ducimus
                        qublanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores
                      </p>
                    </div>
                  </div>
                </div>
                {/* accordion-item */}
                <div className="accordion-item">
                  {/* accordion-header */}
                  <h6 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      What benefit use our platform?
                    </button>
                  </h6>
                  {/* accordion-collapse */}
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>At vero eos et accusamus iusto odio dignissimos ducimus
                        qublanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores
                      </p>
                    </div>
                  </div>
                </div>
                {/* accordion-item */}
                <div className="accordion-item">
                  {/* accordion-header */}
                  <h6 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      How you get our internet services?
                    </button>
                  </h6>
                  {/* accordion-collapse */}
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>At vero eos et accusamus iusto odio dignissimos ducimus
                        qublanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores
                      </p>
                    </div>
                  </div>
                </div>
                {/* accordion-item */}
                <div className="accordion-item">
                  {/* accordion-header */}
                  <h6 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed last" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      How to get 7 days free trail?
                    </button>
                  </h6>
                  {/* accordion-collapse */}
                  <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>At vero eos et accusamus iusto odio dignissimos ducimus
                        qublanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* fiber-broadband-bottom */}
    <div className="fiber-broadband-bottom">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
          {/* fiber-broadband-bottom-inner */}
          <div className="fiber-broadband-bottom-inner align-items-center">
            <div className="fiber-broadband-bottom-inner-img">
              <img src="assets/images/services/fiber-broadband-bottom-img-1.jpg" alt="fiber-broadband-bottom-img-1" />
            </div>
            <div className="fiber-broadband-bottom-inner-details">
              <h3>Satellite TV</h3>
              <a href="#" className="btn-read-more">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms">
          {/* fiber-broadband-bottom-inner-2 */}
          <div className="fiber-broadband-bottom-inner-2 align-items-center">
            <div className="fiber-broadband-bottom-inner-img">
              <img src="assets/images/services/fiber-broadband-bottom-img-2.jpg" alt="fiber-broadband-bottom-img-2" />
            </div>
            <div className="fiber-broadband-bottom-inner-details ">
              <h3>Cinema &amp; Dreama</h3>
              <a href="#" className="btn-read-more">Read More</a>
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
