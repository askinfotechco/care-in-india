import React from "react";
import professionalBoxImg1 from "../assets/image/professional-box-img1.png";

export default function DoctorsCard(props) {
  return (
    <div class="col-lg-4 col-md-4">
      <a href="team-detail.html">
        <div class="professional-box-item text-center">
          <figure class="mb-0">
            <img
              src={professionalBoxImg1}
              // replace with actual image
              //   src={props.image}
              alt="professional-box-img"
              class="img-fluid"
            />
          </figure>
          <h5>{`Dr. ${props.data.firstname} ${props.data.lastname}`}</h5>
          <small class="d-block">{props.data.specialization}</small>
          <span class="d-block">
            Lorem ipsum dolor sit ametc onsectetur adipiscing elitsed do eiusmod
          </span>
          <div class="professional-box-social-list">
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
      </a>
    </div>
  );
}
