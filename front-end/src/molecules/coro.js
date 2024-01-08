import React from "react";
import styled from "styled-components";
import anaylsis from "../static/images/analysis.png";
import steths from "../static/images/steths.jpg";
import surgery from "../static/images/surgery.jpg";
import { Link } from "react-router-dom";

export default function Carousel() {
  const Div = styled.div`
    width: 90%;
    height: 50%;
    margin: 0 auto;
    box-shadow: 5px 5px 5px black;
    background: #f0f6ff;
    padding: 5%;
    &:hover {
      transform: scale(1.01);
    }
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
  `;

  return (
    <Div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={anaylsis} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <StyledLink to={"/healthPackage"}>
                <h5>Popular Health Checkups</h5>
                <p>
                  Taking care of your health is an investment, not an expense.
                </p>
              </StyledLink>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={steths} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={surgery} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </Div>
  );
}
