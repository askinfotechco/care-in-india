import React from "react";
import Carousel from "react-material-ui-carousel";
import {promotionDetails } from "../../data/PromotionData";
import { PromotionCards } from "./PromotionCards";

export const PromotionCarousel = () => {
  return (
    <Carousel sx={{maxWidth: "900px", margin: "0 auto", borderRadius: "15px"}}>
      {promotionDetails.map((recomm, index) => (
        <PromotionCards key={index} items={recomm} />
      ))}
    </Carousel>
  );
};
