import React from "react";
import classes from "./card.module.css";
import image from "./img/img.png";

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={image} className={classes.img} />
      <div className={classes.blockTitle}>
        <span className={classes.title}>Десерты</span>
      </div>
      <div className={classes.blockDesc}>
        <span className={classes.descrip}>
          Тысячи десертов на любой вкус ждут вас 24/7
        </span>
      </div>
    </div>
  );
};
export default Card;
