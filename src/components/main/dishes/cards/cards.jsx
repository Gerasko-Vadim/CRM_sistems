import React from "react";
import { Link } from "react-router-dom";
import clas from "./cards.module.css";
import img1 from "./img/img1.png";

// imageLinks: ["https://qrmenu.artwaga.com/storage/products/e9adb3…17d7/H2X0xGZMgkHrYtnZAhAmEcwcfL2EjIi5TkAFsVbB.jpg"]
// is_recommended: 1
// measureUnit: "serv"
// name: "Капучино"

const CardDishes = ({data}) => {
  const minPrice = data.sizeprice.reduce((accumulator , currentValue ) => {
    return (accumulator.current_price < currentValue.current_price ? accumulator : currentValue)
  });
  return (
    <Link to="/dishes-info" className={clas.a}>
      <div className={clas.card}>
        <img alt="img" className={clas.img} src={data.imageLinks[0] && data.imageLinks[0]} />
        <div className={clas.nameDishes}>
          <span className={clas.name}>{data.name}</span>
        </div>
        <div className={clas.price}>От {minPrice.current_price} сом</div>
      </div>
    </Link>
  );
};
export default CardDishes;
