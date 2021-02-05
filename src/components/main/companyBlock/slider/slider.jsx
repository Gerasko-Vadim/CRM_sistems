import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import "react-magic-slider-dots/dist/magic-dots.css";
import Cards from "./cards/cards";



const SliderCards = () => {
  const settings = {
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="main-slider">
      <Slider {...settings}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Slider>
    </div>
  );
};
export default SliderCards;
