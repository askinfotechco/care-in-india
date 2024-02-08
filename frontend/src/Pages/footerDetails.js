import { React } from 'react';
import footerLogo from "../assets/image/footer-logo.png";
import paymentImg1 from "../assets/image/payment-img1.png";
import paymentImg2 from "../assets/image/payment-img2.png";
import paymentImg3 from "../assets/image/payment-img3.png";
import paymentImg4 from "../assets/image/payment-img4.png";

export default function FooterDetails() {
  return (
    <div>
      <section>
        <div className="w-100 float-left weight-footer-con">
          <div className="container">
            <div className="weight-footer-inner-con">
              <div className="row">
                <div className="col-lg-5 col-12 text-xl-left text-lg-left text-center">
                  <div className="weight-footer-content ">
                    <figure>
                      <img
                        src={footerLogo}
                        alt="footer-logo"
                        className="img-fluid"
                      />
                    </figure>
                    <p className="col-lg-11 col-md-7 pl-0 pr-0 ml-lg-0 mr-lg-0 ml-md-auto mr-md-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitsed
                      do eiusmod tempororem ipsum dolor sit am econsect
                      ametconsectetetur adipiscing.
                    </p>
                    <div className="weight-social-list">
                      <ul className="list-unstyled mb-0">
                        <li className="d-inline-block">
                          <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                        <li className="d-inline-block">
                          <a href="https://twitter.com/?lang=en">
                            <i className="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                        <li className="d-inline-block">
                          <a href="https://www.linkedin.com/signup">
                            <i className="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                        <li className="d-inline-block">
                          <a href="https://www.pinterest.com/">
                            <i className="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div className="weight-footer-content">
                    <h5>Important Link</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fas fa-caret-right"></i>Appointment
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Doctors
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Services
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Specialties
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Neurology
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-caret-right"></i>Oncology
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-6">
                  <div className="weight-footer-content">
                    <h5>Support</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fas fa-caret-right"></i>Support
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Contact Us
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Knowledge Base
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>About Us
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>Faq
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-caret-right"></i>Partnerships
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 col-12">
                  <div className="weight-footer-content">
                    <h5>Get in Touch</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <span>Email: </span>info@medtexh.com
                      </li>
                      <li>
                        <span>Phone: </span>+1 234 567 89 0 0
                      </li>
                      <li>
                        <span>Fax: </span>+1 ( 987 ) 654 321 9 9
                      </li>
                      <li className="mb-0">
                        <span className="pr-2">Address:</span>King Street
                        Melbourne, 3000, Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-100 float-left footer-con text-xl-left text-lg-left text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="mb-0">
                Copyright ©2022 medtexh.com All Rights Reserved
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-center">
              <figure className="mb-0 d-inline-block">
                <img
                  src={paymentImg1}
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
              <figure className="mb-0 d-inline-block">
                <img
                  src={paymentImg2}
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
              <figure className="mb-0 d-inline-block">
                <img
                  src={paymentImg3}
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
              <figure className="mb-0 d-inline-block mr-0">
                <img
                  src={paymentImg4}
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
