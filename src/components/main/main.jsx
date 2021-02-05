import React,{useEffect} from "react";
import CarouselPage from "./carusel/carusel";
import clas from "./main.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CompanyBlock from "./companyBlock/companyBlock";
import Dishes from "./dishes/dishes";

import CardsWrapper from "./cardsWrapper/cardsWrapper";

const Main = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div>
      <CarouselPage />
      <CompanyBlock />
      <div className={clas.blockDeshes}>
        <Dishes />
        <CardsWrapper />
        <div className={clas.blockTitle}>
          <span className={clas.title}>Бургеры</span>
        </div>

        <CardsWrapper />
      </div>
    </div>
  );
};
export default Main;