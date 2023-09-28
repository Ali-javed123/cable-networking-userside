import React from 'react'

export default function Home1Section8() {
  return (
    <>
 <section className="faq-two">
  {/* faq-two-shape-1 */}
  <div className="faq-two-shape-1" />
  <div className="container">
    <div className="row">
      <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
        {/* faq-two-info */}
        <div className="faq-two-info">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-two-icon" />
            <span>Asked Questions</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Have Any Questions On Your Minds!</h2>
          </div>
          {/* faq-two-block */}
          <ul className="faq-two-block">
            <li className="wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms">
              <i className="fas fa-plus" />
              <h2 className="faq-count">930</h2>
              <p>TV Channels</p>
            </li>
            <li className="wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="200ms">
              <i className="fas fa-plus" />
              <h2 className="faq-count">453</h2>
              <p>HD+ Movies</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
        {/* accordion */}
        <div className="faq-two-inner">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {/* accordion-item */}
            <div className="accordion-item">
              {/* accordion-header */}
              <h6 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                  How you get our internet services?
                </button>
              </h6>
              {/* accordion-collapse */}
              <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <p>At vero eos et accusamus iusto odio dignissimos ducimus qublanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores</p>
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
                  <p>At vero eos et accusamus iusto odio dignissimos ducimus qublanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores</p>
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
                  <p>At vero eos et accusamus iusto odio dignissimos ducimus qublanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores</p>
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
                  <p>At vero eos et accusamus iusto odio dignissimos ducimus qublanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
              </div>
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
