import React from "react";

import classes from "./helloPage.module.css";
import SliderCards from "./slider/slider";

const HelloPage = () => {
  return (
    <div className={classes.wrapper}>
      <SliderCards />
      <div className={classes.blockBtn}>
      <button className={classes.btn}>Далее</button>
      </div>
      
    </div>
  );
};
export default HelloPage;
