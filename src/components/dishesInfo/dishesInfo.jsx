import React from "react";
import CardDishes from "../main/dishes/cards/cards";
import clas from "./dishesInfo.module.css";
import Ordering from "./ordering/ordering";
import Slider from "./slider/slider";

const DishesInfo = () => {
  return (
    <>
      <Slider />
      <Ordering />
      <div className={clas.similar}>
        <span className={clas.title}>Что-то еще?</span>
        <div className={clas.similarsBlock}>
          <CardDishes />
          <CardDishes />
          <CardDishes />
          <CardDishes />
          <CardDishes />
          <CardDishes />
          <CardDishes />
          <CardDishes />
        </div>
      </div>
    </>
  );
};
export default DishesInfo;