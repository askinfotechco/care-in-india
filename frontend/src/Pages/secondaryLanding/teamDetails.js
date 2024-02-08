import React from "react";
import FooterDetails from "../footerDetails";

export default function TeamDetails() {
  return (
    <div>
      {" "}
      <div class="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="top-bar-left-con ">
                <i class="fas fa-map-marker-alt"></i>
                <span>King Street Melbourne, 3000, Australia</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
              <div class="top-bar-right-con d-flex">
                <span>Get Social:</span>
                <ul class="list-unstyled mb-0">
                  <li class="float-left">
                    <a href="https://www.facebook.com/" class="text-white">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="float-left">
                    <a href="https://twitter.com/?lang=en" class="text-white">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li class="float-left">
                    <a href="https://www.pinterest.com/" class="text-white">
                      <i class="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li class="float-left">
                    <a href="https://www.youtube.com/" class="text-white">
                      <i class="fab fa-youtube-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- top-bar-section-->
<!-- header-and-banner-section --> */}
      <div class="w-100 float-left header-and-banner-con banner-overlay-img">
        <div class="container">
          <div class="overlay-img">
            {/* <!-- navbar-start --> */}
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="index.html">
                <img
                  src="assets/image/logo-img.png"
                  alt="logo-img"
                  class="img-fluid"
                />
              </a>
              <button
                class="navbar-toggler p-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mr-auto">
                  <li class="nav-item active ">
                    <a class="nav-link p-0 text-white" href="index.html">
                      Home<span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-0 text-white" href="about.html">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-0 text-white" href="services.html">
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-0 text-white" href="team.html">
                      Team{" "}
                    </a>
                  </li>
                  <li class="nav-item dropdown pr-lg-0">
                    <a
                      class="nav-link dropdown-toggle p-0 text-white"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <div
                      class="dropdown-menu p-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <a class="dropdown-item" href="faq.html">
                        Faq
                      </a>
                      <a class="dropdown-item" href="four-column.html">
                        four-column
                      </a>
                      <a class="dropdown-item" href="infinite-scroll.html">
                        infinite-scroll
                      </a>
                      <a class="dropdown-item" href="load-more.html">
                        load-more
                      </a>
                      <a class="dropdown-item" href="one-column.html">
                        one-column
                      </a>
                      <a class="dropdown-item" href="six-colum-full-wide.html">
                        six-colum-full-wide
                      </a>
                      <a class="dropdown-item" href="three-column.html">
                        three-colum-sidbar
                      </a>
                      <a class="dropdown-item" href="three-colum-sidbar.html">
                        three-column
                      </a>
                      <a class="dropdown-item" href="two-column.html">
                        two-column
                      </a>
                    </div>
                  </li>
                  <li class="nav-item pr-0">
                    <a class="nav-link p-0 text-white" href="contact.html">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
                <a href="tel:+12345678" class="navbar-btn text-white">
                  <i class="fas fa-phone-volume"></i>
                  +1 234 56 78
                </a>
              </div>
            </nav>
            {/* <!-- navbar-end -->
        <!-- banner-start --> */}
            <section>
              <div class="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center">
                <div class="container">
                  <div class="generic-banner-content text-white text-center">
                    <h1>Team Detail</h1>
                    <p class="text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                      <br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- banner-end --> */}
          </div>
        </div>
      </div>
      {/* <!-- header-and-banner-section -->
<!-- team detail section --> */}
      <section>
        <div class="team-detail-con text-lg-left text-center w-100 float-left">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 order-lg-0 order-2">
                <div
                  class="team-member-detail wow slideInLeft"
                  style={{ visibility: "visible", animation: "slideInLeft" }}
                >
                  <h5>Dental Medicine</h5>
                  <h2>Dr. Maria Andaloro</h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit
                    aut fugit, sed quia consequuntur magni dolores eos aui
                    ratione voluptatem sequi nesciunt nerue porro ruisnuam
                    dolorem ipsum quia dolor sit amet.
                  </p>
                  <p>
                    Repellendus temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et voluta
                    repudi.
                  </p>
                  <div class="team-contanct">
                    <span>Email:</span>
                    <span> maria@confrico.com</span>
                    <br />
                    <span>Phone: </span>
                    <span>+1 234 684 786 09</span>
                  </div>
                  <div class="weight-social-list">
                    <ul class="list-unstyled mb-0">
                      <li class="d-inline-block">
                        <a href="https://www.facebook.com/">
                          <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                      <li class="d-inline-block">
                        <a href="https://twitter.com/?lang=en">
                          <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                      <li class="d-inline-block">
                        <a href="https://www.linkedin.com/signup">
                          <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                      <li class="d-inline-block">
                        <a href="https://www.pinterest.com/">
                          <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 d-flex align-items-center justify-content-center">
                <figure
                  class="mb-0 float-lg-right wow slideInRight"
                  style={{ visibility: "visible", animation: "slideInRight" }}
                >
                  <img
                    src="assets/image/team-member-img.png"
                    alt="team-member-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team detail section -->
<!-- professional skils section --> */}
      <section>
        <div class="team-professional-con w-100 float-left">
          <div class="container">
            <div class="team-professional-inner-con">
              <div class="row">
                <div class="col-lg-6">
                  <div class="team-professional-lft wow slideInLeft">
                    <h2>Professional Skils</h2>
                    <div class="skills" data-percent="100%">
                      <div class="title-bar ">
                        <h5 class="mb-0">Emergency Help</h5>
                      </div>
                      <span>24 hour</span>
                      <div class="skillbar"></div>
                    </div>
                    <div class="skills" data-percent="99%">
                      <div class="title-bar">
                        <h5 class="mb-0">Qualified Doctors</h5>
                      </div>
                      <span>99%</span>
                      <div class="skillbar"></div>
                    </div>
                    <div class="skills" data-percent="85%">
                      <div class="title-bar">
                        <h5 class="mb-0">First Aid Kit</h5>
                      </div>
                      <span>85%</span>
                      <div class="skillbar"></div>
                    </div>
                    <div class="skills" data-percent="100%">
                      <div class="title-bar">
                        <h5 class="mb-0">Emergency</h5>
                      </div>
                      <span>24 hours</span>
                      <div class="skillbar"></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-end">
                  <div class="experiences-con wow slideInRight">
                    <h2>Experiences</h2>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      <br /> odit aut fugit, sed quia consequuntur magni
                      dolores.
                    </p>
                    <ul class="list-unstyled list">
                      <li>
                        <i class="fas fa-check-circle"></i>Lorem Ipsum is simply
                        dummy text printing.
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i>It is a long
                        established fact that a reader.
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i>Contrary to popular
                        belief, Lorem Ipsum.
                      </li>
                      <li>
                        <i class="fas fa-check-circle"></i>Lorem Ipsum is simply
                        dummy text printing
                      </li>
                      <li class="mb-0">
                        <i class="fas fa-check-circle"></i>It is a long
                        established fact that a reader.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- professional skils section -->
     <!-- news-letter-section --> */}
      <section>
        <div class="w-100 float-left news-letter-con">
          <div class="container">
            <div class="news-letter-inner-con banner-overlay-img">
              <div class="row overlay-img align-items-center">
                <div class="col-lg-6 col-md-5">
                  <div class="news-letter-title">
                    <h2 class="text-white mb-0">Subscribe to our Newsletter</h2>
                  </div>
                </div>
                <div class="col-lg-6 col-md-7">
                  <div class="news-letter-input-con position-relative">
                    <div class="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Enter Your Email:"
                        class="w-100"
                      />
                    </div>
                    <button>
                      <i class="far fa-envelope"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- news-letter-section -->
     <!-- logo-section --> */}
      <div class="w-100 float-left logo-con">
        <div class="container">
          <div class="logo-inner-con">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img1.png"
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img2.png"
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img3.png"
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img4.png"
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img5.png"
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img6.png"
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- logo-section -->
      <!-- weight-footer-section --> */}
      <FooterDetails />
    </div>
  );
}
