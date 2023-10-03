import React from 'react'

export default function ContactSection2() {
  return (
    <>
<section className="contact-page">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 col-md-12 col-sm-12">
        <div className="contact-page-left wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
          {/* section-title */}
          <div className="section-title">
            <i className="icon-main-icon" />
            <span>Asked Questions</span>
          </div>
          {/* section-main-title */}
          <div className="section-main-title">
            <h2>Ready to <span className="section-main-title-primery">Talk With</span> Us For
              Project ?</h2>
          </div>
          {/* contact-info */}
          <div className="contact-info">
            <ul>
              <li className="contact-inner wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="100ms">
                <div className="icon">
                  <i className="icon-map-marker" />
                </div>
                <div className="text-box">
                  <span>Address</span>
                  <h3>55 Main Street, 2nd block Malborne, Austria</h3>
                </div>
              </li>
              <li className="contact-inner wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="icon">
                  <i className="icon-phone-volume" />
                </div>
                <div className="text-box">
                  <span>Phone</span>
                  <h3>+000 (123) 456 88</h3>
                </div>
              </li>
              <li className="contact-inner wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="500ms">
                <div className="icon">
                  <i className="icon-gmail-box" />
                </div>
                <div className="text-box">
                  <span>Email Us</span>
                  <h3>support@gmail.com</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="200ms">
        {/* contact-page-right */}
        <div className="contact-page-right">
          <div className="contact-page-form">
            <h3 className="contact-page-form-title">Send Us Message</h3>
            <p className="contact-page-form-text">Questions or you would just like to say hello,
              contact us.</p>
            <form action="https://thegenius.co/html/twoet/assets/inc/sendemail.php" className="contact-page__form-box contact-form-validated ">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page-input-box">
                    <label htmlFor="full-Name-123">Full Name</label>
                    <input type="text" id="full-Name-123" placeholder="Full Name" className="input-contact-text" name="name" required />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page-input-box">
                    <label htmlFor="email-123">Email</label>
                    <input type="email" className="input-contact-text" id="email-123" placeholder="suppot@gmail.com" name="subject" required />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="contact-page-input-box">
                    <label htmlFor="textbox">Subject</label>
                    <input type="text" id="textbox" className="input-contact-text" placeholder="I would like to discussed" required />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="contact-page-input-box">
                    <label htmlFor="message-123">Message</label>
                    <textarea name="message" className="input-contact-text" id="message-123" placeholder="write message" required defaultValue={""} />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="contact-page-input-box">
                    <div className="theme-btn">
                      <button className="btn btn-bg-primary">Send Us Message<i className="icon-1" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
