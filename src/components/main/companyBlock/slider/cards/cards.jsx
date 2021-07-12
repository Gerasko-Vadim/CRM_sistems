import React from "react";
import clas from "./cards.module.css";
import img1 from "./img/img1.png";

const Cards = () => {
  return (
    <div className={clas.card}>
      <img alt="img" src={img1} className={clas.img} />
      <div className={clas.blockText}>
        <span className={clas.text}>Скидка 25% на первый заказ по коду</span>
      </div>
      <div className={clas.description1}>
        <span>НА ВСЕ МЕНЮ</span>
      </div>
    </div>
  );
};
export default Cards;
