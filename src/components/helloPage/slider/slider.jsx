import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import st from "./slider.module.css";
import Card from "./card/card";

const SliderCards = () => {
  const settings = {
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
  };
  return (
    <div className="hello-slider">
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};
export default SliderCards;
