import React from "react";
import clas from "./cards.module.css";
import img1 from "./img/img1.png"

const CardDishes = () => {
  return (
    <div className={clas.card}>
      <img alt="img" className={clas.img} src={img1} />
      <div className={clas.nameDishes}>
        <span className={clas.name}>Большой бургер острый</span>
      </div>
      <span className={clas.weight}>230 г</span>
      <div className={clas.price}>
      230 сом
      </div>
    </div>
  );
};
export default CardDishes;
