import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./helloPage.module.css";
import SliderCards from "./slider/slider";

const HelloPage = () => {
  const {pathname} = useLocation()
  const table = pathname.split('/').pop()
  localStorage.setItem('table',table)
  return (
    <div className={classes.wrapper}>
      <SliderCards />
      <div className={classes.blockBtn}>
        <Link to="/main">
          <button className={classes.btn}>Далее</button>
        </Link>
      </div>
    </div>
  );
};
export default HelloPage;
