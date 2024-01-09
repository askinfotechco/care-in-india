import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import banner from "../assets/image/banner-left-img.png";
import "../assets/css/animate.css";
import "../assets/css/custom-style.css";
import "../assets/css/mobile.css";
import "../assets/css/style.css";
import "../assets/css/super-classes.css";
import NavBar from "../molecules/navBar";
//import { Link } from "react-router-dom";

function Home() {
  return (
    <div classNameName="App">
      <div className="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="top-bar-left-con ">
                <i className="fas fa-map-marker-alt"></i>
                <span>King Street Melbourne, 3000, Australia</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
              <div className="top-bar-right-con d-flex">
                <span>Get Social:</span>
                <ul className="list-unstyled mb-0">
                  <li className="float-left">
                    <a href="https://www.facebook.com/" className="text-white">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="float-left">
                    <a
                      href="https://twitter.com/?lang=en"
                      className="text-white"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://www.pinterest.com/" className="text-white">
                      <i className="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://www.youtube.com/" className="text-white">
                      <i className="fab fa-youtube-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
        <div className="container">
          <div className="overlay-img">
            {/* <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/image/logo-img.png"
                  alt="logo-img"
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler p-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mr-auto">
                  <li className="nav-item active ">
                    <a className="nav-link p-0 text-white" href="index.html">
                      Home<span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 text-white" href="">
                      <Link to="/aboutUs">About</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 text-white" href="services.html">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0 text-white" href="team.html">
                      Team{" "}
                    </a>
                  </li>
                  <li className="nav-item dropdown pr-lg-0">
                    <a
                      className="nav-link dropdown-toggle p-0 text-white"
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
                      className="dropdown-menu p-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="faq.html">
                        Faq
                      </a>
                      <a className="dropdown-item" href="four-column.html">
                        four-column
                      </a>
                      <a className="dropdown-item" href="infinite-scroll.html">
                        infinite-scroll
                      </a>
                      <a className="dropdown-item" href="load-more.html">
                        load-more
                      </a>
                      <a className="dropdown-item" href="one-column.html">
                        one-column
                      </a>
                      <a
                        className="dropdown-item"
                        href="six-colum-full-wide.html"
                      >
                        six-colum-full-wide
                      </a>
                      <a className="dropdown-item" href="three-column.html">
                        three-colum-sidbar
                      </a>
                      <a
                        className="dropdown-item"
                        href="three-colum-sidbar.html"
                      >
                        three-column
                      </a>
                      <a className="dropdown-item" href="two-column.html">
                        two-column
                      </a>
                    </div>
                  </li>
                  <li className="nav-item pr-0">
                    <a className="nav-link p-0 text-white" href="/contact">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
                <a href="tel:+12345678" className="navbar-btn text-white">
                  <i className="fas fa-phone-volume"></i>
                  +1 234 56 78
                </a>
              </div>
            </nav> */}
            <NavBar />
            <section>
              <div className="w-100 float-left banner-con text-xl-left text-lg-left text-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                      <div className="banner-left-con">
                        <figure className="mb-0 left-curve-img wow slideInLeft">
                          <img
                            src="assets/image/small-left-curve-img.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <figure className="mb-0">
                          <img
                            src={banner}
                            alt="banner-left-img"
                            className="img-fluid banner-left-img"
                          />
                        </figure>
                        <figure className="mb-0 right-curve-img wow slideInRight">
                          <img
                            src="assets/image/small-right-curve-img.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-right-content text-white">
                        <h5>Healthy. Everyday.</h5>
                        <h1>We are Providing Best and Affordable Healthcare</h1>
                        <p className="text-white col-lg-10 col-md-9 ml-xl-0 mr-xl-0 ml-lg-0 mr-lg-0 ml-auto mr-auto pl-0 pr-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <a href="#contact-form" className="appointment-btn ">
                          Make Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- banner-end --> */}
          </div>
        </div>
      </div>
      {/* <!-- header-and-banner-section -->
      <!-- feature-box --> */}
      <section>
        <div className="w-100 float-left feature-box-con text-center">
          <div className="container">
            <div className="row bg-white">
              <div className="col-lg-3 col-md-3 col-sm-6  pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon1.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Doctors</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon2.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Hospitals</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon3.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>General Medicine</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon4.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Hospice Care</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-white">
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon5.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Rehab</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon6.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Dialysis Facilities</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon7.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Health Schedule</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0 border-right-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src="assets/image/feature-box-icon8.png"
                      alt="feature-box-icon"
                      className="img-fluid"
                    />
                  </figure>
                  <h5>Ambulance Call</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature-box -->
      <!-- quality-system-section --> */}
      <section>
        <div className="w-100 float-left quality-system-con">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="quality-system-left-con">
                  <h2>Our Quality System is Ready to Help You!</h2>
                  <p>
                    Seram ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt.
                  </p>
                  <p>
                    Aenean leo ligula, porttitor eu consequat vitae eleifend ac
                    enim aliqu am lorem ante dapibus in viverra quis feugiata
                    tellus.
                  </p>
                  <div className="quality-system-list">
                    <ul className="list-unstyled">
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>24 Hour Service
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Emergency Cases
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Expert Doctors
                      </li>
                    </ul>
                  </div>
                  <div className="quality-system-list">
                    <ul className="list-unstyled">
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Update Covid-19
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>24/7 Help Center
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Modern Clinic
                      </li>
                    </ul>
                  </div>
                  <a href="#contact-form" className="appointment-btn">
                    Make Appointment
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="quality-system-right-con position-relative text-center">
                  <figure className="mb-0 left-curve-img wow slideInLeft">
                    <img
                      src="assets/image/small-left-curve-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <figure className="mb-0">
                    <img
                      src="assets/image/quality-system-img.png"
                      alt="quality-system-img"
                      className="img-fluid human-img"
                    />
                  </figure>
                  <figure className="mb-0 right-curve-img wow slideInRight">
                    <img
                      src="assets/image/small-right-curve-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 float-left offer-con">
          <div className="container">
            <div className="offer-inner-con banner-overlay-img">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 order-xl-0 order-lg-0 order-md-0 order-2">
                  <div className="offer-left-con position-relative overlay-img">
                    <figure className="mb-0">
                      <img
                        src="assets/image/offer-section-img.png"
                        alt="offer-section-img"
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="offer-right-con overlay-img">
                    {/* <h2 className="text-white">Protective Gears<br>
                              for <span>Covid</span> Protection<br>
                              Don’t miss it!
                           </h2> */}
                    <a href="contact.html" className="shope-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="offer-note">
                <h4 className="text-white mb-0">
                  25% <span className="d-block">OFF</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- offer-section -->
      <!-- fun-facts-section--> */}
      <section>
        <div className="w-100 float-left fun-facts-con">
          <div className="container">
            <div className="row text-xl-left text-lg-left text-center">
              <div className="col-lg-6">
                <div className="fun-facts-heading ">
                  <h2>A Healing Touch to Heal you Completely.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fun-facts-content">
                  <p className=" mb-0">
                    Seram ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt aenean leo ligula, porttitor
                    eu consequat vitae eleifend ac enim aliqu am{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="fun-facts-box-con text-sm-left text-center">
              <div className="row bg-white">
                <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                  <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                    <figure className="mb-0 d-inline-block">
                      <img
                        src="assets/image/fun-facts-icon1.png"
                        alt="fun-facts-icon1"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="fun-facts-item-content d-inline-block">
                      <div className="position-relative fun-facts-item-title d-inline-block">
                        <h2 className="count">814</h2>
                        <span>+</span>
                      </div>
                      <p className="mb-0">Happy Patients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                  <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                    <figure className="mb-0 d-inline-block">
                      <img
                        src="assets/image/fun-facts-icon2.png"
                        alt="fun-facts-icon1"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="fun-facts-item-content d-inline-block">
                      <div className="position-relative fun-facts-item-title d-inline-block">
                        <h2 className="count">522</h2>
                        <span>+</span>
                      </div>
                      <p className="mb-0">Hospital Room</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                  <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                    <figure className="mb-0 d-inline-block">
                      <img
                        src="assets/image/fun-facts-icon3.png"
                        alt="fun-facts-icon1"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="fun-facts-item-content d-inline-block">
                      <div className="position-relative fun-facts-item-title d-inline-block">
                        <h2 className="count">99</h2>
                        <span>+</span>
                      </div>
                      <p className="mb-0">Qualified Doctor</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                  <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                    <figure className="mb-0 d-inline-block">
                      <img
                        src="assets/image/fun-facts-icon4.png"
                        alt="fun-facts-icon1"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="fun-facts-item-content d-inline-block">
                      <div className="position-relative fun-facts-item-title d-inline-block">
                        <h2 className="count">96</h2>
                        <span>%</span>
                      </div>
                      <p className="mb-0">Positive Feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- fun-facts-section-->
      <!-- form-section --> */}
      <section>
        <div className="w-100 float-left form-main-con" id="contact-form">
          <div className="container">
            <div className="text-center">
              <h2>Book An Appointment</h2>
              <p>
                Seram ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt aenean
                <br />
                leo ligula porttitor eu consequat vitae eleifend tac.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                <div className="form-left-con position-relative text-center">
                  <figure className="mb-0 left-curve-img wow slideInLeft">
                    <img
                      src="assets/image/small-left-curve-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <figure className="mb-0">
                    <img
                      src="assets/image/form-left-img.png"
                      alt="form-left-img"
                      className="img-fluid human-img form-left-img"
                    />
                  </figure>
                  <figure className="mb-0 right-curve-img wow slideInRight">
                    <img
                      src="assets/image/small-right-curve-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="contact-form">
                  <div className="form-group">
                    <label
                      for="exampleFormControlSelect1"
                      className="text-white"
                    >
                      Department
                    </label>
                    <select
                      className="form-control position-relative"
                      id="exampleFormControlSelect1"
                    >
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                    </select>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name:"
                          name="name"
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email:"
                        />
                        <small
                          id="emailHelp"
                          className="form-text text-muted"
                        ></small>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="time" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <select className="form-control position-relative">
                          <option>Choose Doctor </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <i className="fas fa-angle-down down-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="textarea form-group W-100">
                        <textarea
                          className="form-control "
                          placeholder="Message:"
                          rows="3"
                          name="comments"
                          id="comments"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn  appointment-btn">
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- form-section -->
      <!-- slider-section --> */}
      <section>
        <div className="w-100 float-left slider-con text-lg-left text-center">
          <div className="container">
            <div className="slider-inner-con banner-overlay-img">
              <div className="row overlay-img">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="slider-left-con">
                    <h2 className="text-white">
                      What Our <br />
                      Patients Say About Our Services
                    </h2>
                    <p className="mb-0">
                      4.8 Overall Rating, Based
                      <br />
                      on 2500+ Reviews.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="auther-con w-100 d-inline-block">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src="assets/image/auther-img.png"
                              alt="auther-img"
                              className="img-fluid"
                            />
                          </figure>
                          <div className="auther-title d-inline-block">
                            <h4 className="text-white">Victoria Sullivan</h4>
                            <p className="mb-0">Dental Patient</p>
                          </div>
                        </div>
                        <p className="text-white mb-0">
                          Seram ipsum dolor sit amet consectetur adipiscing elit
                          sed do eius mod tempor incididunt aenean leo ligula
                          portti tor eu consequat vitae eleifend tac phasellus
                          viverra nulla utm etus varius laoreetuisque
                          rutrumenean imperdiet tiam ultri cies nisi vel augues
                          mod tempor in.
                        </p>
                      </div>
                      <div className="carousel-item">
                        <div className="auther-con w-100 d-inline-block">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src="assets/image/auther-img.png"
                              alt="auther-img"
                              className="img-fluid"
                            />
                          </figure>
                          <div className="auther-title d-inline-block">
                            <h4 className="text-white">Victoria Sullivan</h4>
                            <p className="mb-0">Dental Patient</p>
                          </div>
                        </div>
                        <p className="text-white mb-0">
                          Seram ipsum dolor sit amet consectetur adipiscing elit
                          sed do eius mod tempor incididunt aenean leo ligula
                          portti tor eu consequat vitae eleifend tac phasellus
                          viverra nulla utm etus varius laoreetuisque
                          rutrumenean imperdiet tiam ultri cies nisi vel augues
                          mod tempor in.
                        </p>
                      </div>
                      <div className="carousel-item">
                        <div className="auther-con w-100 d-inline-block">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src="assets/image/auther-img.png"
                              alt="auther-img"
                              className="img-fluid"
                            />
                          </figure>
                          <div className="auther-title d-inline-block">
                            <h4 className="text-white">Victoria Sullivan</h4>
                            <p className="mb-0">Dental Patient</p>
                          </div>
                        </div>
                        <p className="text-white mb-0">
                          Seram ipsum dolor sit amet consectetur adipiscing elit
                          sed do eius mod tempor incididunt aenean leo ligula
                          portti tor eu consequat vitae eleifend tac phasellus
                          viverra nulla utm etus varius laoreetuisque
                          rutrumenean imperdiet tiam ultri cies nisi vel augues
                          mod tempor in.
                        </p>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <i className="fas fa-arrow-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <i className="fas fa-arrow-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- slider-section -->
      <!-- blog section --> */}
      <section>
        <div className="w-100 float-left blog-con">
          <div className="container">
            <div className="text-center">
              <h2>Our Latest News</h2>
              <p>
                Seram ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt aenean
                <br />
                leo ligula porttitor eu consequat vitae eleifend tac.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <a href="single-post.html">
                  <div className="blog-item">
                    <figure className="mb-0">
                      <img
                        src="assets/image/blog-img1.jpg"
                        alt="blog-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="blog-item-content">
                      <div className="blog-item-auther-name">
                        <span>By David William</span>
                        <span>Dec 1, 2022</span>
                      </div>
                      <h4>Quis autem vea eum iure reprehenderit</h4>
                      <p className="mb-0">
                        Dolor repellendus temporibus aute quibu sdam officiis
                        debitis rerum
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4">
                <a href="single-post.html">
                  <div className="blog-item">
                    <figure className="mb-0">
                      <img
                        src="assets/image/blog-img2.jpg"
                        alt="blog-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="blog-item-content">
                      <div className="blog-item-auther-name">
                        <span>By David William</span>
                        <span>Dec 1, 2022</span>
                      </div>
                      <h4>Quis autem vea eum iure reprehenderit</h4>
                      <p className="mb-0">
                        Dolor repellendus temporibus aute quibu sdam officiis
                        debitis rerum
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4">
                <a href="single-post.html">
                  <div className="blog-item mb-0">
                    <figure className="mb-0">
                      <img
                        src="assets/image/blog-img3.jpg"
                        alt="blog-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="blog-item-content">
                      <div className="blog-item-auther-name">
                        <span>By David William</span>
                        <span>Dec 1, 2022</span>
                      </div>
                      <h4>Quis autem vea eum iure reprehenderit</h4>
                      <p className="mb-0">
                        Dolor repellendus temporibus aute quibu sdam officiis
                        debitis rerum
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog section -->
      <!-- mobile-app-section --> */}
      <section>
        <div className="w-100 float-left mobile-app-con">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 order-xl-0 order-lg-0 order-md-0 order-2">
                <div className="mobile-app-left-con position-relative text-center">
                  <figure className="mb-0">
                    <img
                      src="assets/image/mobile-img.png"
                      alt="mobile-img"
                      className="img-fluid human-img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-xl-left text-lg-left text-md-left text-center">
                <div className="mobile-app-right-con">
                  <h2>Download the medtexh Mobile App</h2>
                  <p>
                    Seram ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt enean leo ligula porttitor.
                  </p>
                  <p>
                    Eu consequat vitae eleifend ac enim aliqu am lorem ante
                    dapibus in viverra quis feugiata tellus.
                  </p>
                  <div className="mobile-app-btn">
                    <a
                      href="https://play.google.com/store/apps"
                      className="appointment-btn"
                    >
                      <i className="fab fa-google-play text-white"></i>Goolge
                      Play
                    </a>
                    <a
                      href="https://www.apple.com/app-store/"
                      className="appointment-btn"
                    >
                      <i className="fab fa-app-store text-white"></i>App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mobile-app-section -->
      <!-- news-letter-section --> */}
      <section>
        <div className="w-100 float-left news-letter-con">
          <div className="container">
            <div className="news-letter-inner-con banner-overlay-img">
              <div className="row overlay-img align-items-center">
                <div className="col-lg-6 col-md-5">
                  <div className="news-letter-title">
                    <h2 className="text-white mb-0">
                      Subscribe to our Newsletter
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="news-letter-input-con position-relative">
                    <div className="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Enter Your Email:"
                        className="w-100"
                      />
                    </div>
                    <button>
                      <i className="far fa-envelope"></i>
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
      <div className="w-100 float-left logo-con">
        <div className="container">
          <div className="logo-inner-con">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img1.png"
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img2.png"
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img3.png"
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img4.png"
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img5.png"
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img6.png"
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- logo-section -->
      <!-- weight-footer-section --> */}
      <section>
        <div className="w-100 float-left weight-footer-con">
          <div className="container">
            <div className="weight-footer-inner-con">
              <div className="row">
                <div className="col-lg-5 col-12 text-xl-left text-lg-left text-center">
                  <div className="weight-footer-content ">
                    <figure>
                      <img
                        src="assets/image/footer-logo.png"
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
      {/* <!-- weight-footer-section -->
      <!-- footer-section --> */}
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
                  src="assets/image/payment-img1.png"
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
              <figure className="mb-0 d-inline-block">
                <img
                  src="assets/image/payment-img2.png"
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
              <figure className="mb-0 d-inline-block">
                <img
                  src="assets/image/payment-img3.png"
                  alt="payment-img"
                  className="img-fluid"
                />
              </figure>
              <figure className="mb-0 d-inline-block mr-0">
                <img
                  src="assets/image/payment-img4.png"
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

export default Home;
