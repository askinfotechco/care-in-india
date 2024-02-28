import React from "react";
import NavBarTop from "../../molecules/navBar";
import clientLogoImg1 from "../../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../../assets/image/client-logo-img6.png";
import FooterDetails from "../footerDetails";

const posts = [
  {
    id: 1,
    title: "Routine Dental Exams and Cleanings",
    href: "#",
    description:
      "Regular check-ups and cleanings essential for maintaining good oral health and preventing dental problems such as cavities, gum disease, and tooth decay.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Dental", href: "#" },
  },
  {
    id: 2,
    title: "Restorative Dentistry",
    href: "#",
    description:
      "Whether you need a filling for a cavity, a crown to restore a damaged tooth, or a dental implant to replace a missing tooth, our restorative dental treatments can help you regain a healthy, functional smile.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Dental", href: "#" },
  },
  {
    id: 3,
    title: "Cosmetic Dentistry",
    href: "#",
    description:
      "Enhance the appearance of your smile with our cosmetic dental services, including teeth whitening, porcelain veneers, and Invisalign clear aligners. Achieve the smile of your dreams and boost your confidence with our personalized cosmetic treatments.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Dental", href: "#" },
  },
  {
    id: 4,
    title: "Oral Surgery",
    href: "#",
    description:
      "From wisdom teeth extractions to dental implant placement, our oral surgery services are performed with precision and care to ensure optimal outcomes for our patients.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Dental", href: "#" },
  },
  {
    id: 5,
    title: "Orthodontics, Periodontal Care, Emergency Dental Care and many more...",
    href: "#",
    description:
      "",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Dental", href: "#" },
  },
];

export default function Dental() {
  return (
    <div>
      {/* <!-- top-bar-section-->
      <!-- header-and-banner-section --> */}
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
        <div className="container">
          <div className="overlay-img">
            {/* <!-- navbar-start --> */}
            <NavBarTop />
            {/* <!-- navbar-end -->
               <!-- banner-start --> */}
            <section>
              <div className="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center">
                <div className="container">
                  <div className="generic-banner-content text-white text-center">
                    <h1>Welcome to our premier dental services</h1>
                    <p className="text-white mb-0">
                      {
                        "At CII, we understand the importance of a healthy, radiant smile. Our team of experienced and compassionate dental professionals is dedicated to providing you and your family with the highest quality dental care in a comfortable and welcoming environment."
                      }
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

      <!-- core-vaule-section --> */}
      <section>
        <div className="w-100 float-left core-vaule-con service-page-vaule-con bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="core-vaule-right-con text-xl-left text-lg-left text-md-left">
                  <div className="core-vaule-title text-center">
                    <h2>
                      {"Our comprehensive range of dental services includes"}
                    </h2>
                  </div>
                  <div className="core-vaule-box-con">
                  <div className="bg-white py-6 sm:py-15">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                          {posts.map((post) => (
                            <article
                              key={post.id}
                              className="flex flex-col items-start justify-between"
                            >
                              <div className="relative w-full">
                                <img
                                  src={post.imageUrl}
                                  alt=""
                                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                              </div>
                              <div className="max-w-xl">
                                <div className="mt-2 flex items-center gap-x-4 text-xs">
                                  <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 font-medium text-gray-600 hover:bg-gray-100 no-underline"
                                  >
                                    {post.category.title}
                                  </a>
                                </div>
                                <div className="group relative">
                                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href} className="no-underline">
                                      <span className="absolute inset-0" />
                                      {post.title}
                                    </a>
                                  </h3>
                                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.description}
                                  </p>
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- core-vaule-section -->
      <!-- news-letter-section --> */}
      {/* <section
        style={{ display: "flex", marginTop: "50px", marginBottom: "150px" }}
      >
        <div className="col-lg-3 col-md-4">
          <div className="news-letter-input-con position-relative">
           
            <Link to={"/team"}>
              <button>
                <i className="far fa-envelope">{"Schedule a Visit"}</i>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="news-letter-input-con position-relative">
           
            <Link to={"/team"}>
              <button>
                <i className="far fa-envelope">{"Book Online Consulting"}</i>
              </button>
            </Link>
          </div>
        </div>
      </section> */}
      {/* <!-- news-letter-section -->
      <!-- logo-section --> */}
      <div className="mt-10 w-100 float-left logo-con">
        <div className="container">
          <div className="logo-inner-con">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg1}
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg2}
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg3}
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg4}
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg5}
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg6}
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
      <FooterDetails />
    </div>
  );
}
