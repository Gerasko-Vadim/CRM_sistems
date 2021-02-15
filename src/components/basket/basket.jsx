import React from "react";
import { Link } from "react-router-dom";
import clas from "./basket.module.css";
import FluidTabs from "./fluidTabs/fluidTabs";
import back from "./img/back.png";
import search from "./img/Search.png";

const Basket = () => {
  return (
    <div className={clas.basketPage}>
      <div className={clas.navBar}>
          <Link to="/main">
          <img alt="back" src={back} />
          </Link>
        
        <span className={clas.title}>Корзина</span>
        <img alt="search" src={search} />
      </div>
      <div className={clas.content}>
        <span className={clas.content_title}>В корзине пусто</span>
        <span className={clas.content_descrip}>
          У нас есть большой ассортимент, вы обязательно найдете что-то для
          себя!
        </span>
        <Link className={clas.link} to="/main">
        <button className={clas.button}>В меню</button>
        </Link>
        
      </div>
      <div className={clas.fluidTabs}>
        <FluidTabs />
      </div>
    </div>
  );
};
export default Basket;
