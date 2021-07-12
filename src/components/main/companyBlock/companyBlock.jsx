import React from "react";
import clas from "./companyBlock.module.css";
import logo from "./img/logo.svg";
import stars from "./img/stars.svg";
import SliderCards from "./slider/slider";

const CompanyBlock = () => {
  return (
    <div className={clas.companyBlock}>
      <img alt="logo" src={logo} className={clas.logo} />
      <div className={clas.blockTitle}>
        <span className={clas.title}>Munchen Pub</span>
      </div>
      <div className={clas.breadCrumbs}>
        <div className={clas.stars}>
          <img alt="stars" src={stars} />
          <span className={clas.numberStars}>3.6</span>
        </div>
        <div className={clas.crumbs}>
            <span className={clas.text}>Пиво • Бургеры • Закуски • 1000 сом </span>
        </div>
      </div>
      <SliderCards/>
    </div>
  );
};
export default CompanyBlock;
