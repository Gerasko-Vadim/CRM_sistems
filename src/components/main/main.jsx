import React, { useEffect } from "react";
import CarouselPage from "./carusel/carusel";
import clas from "./main.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CompanyBlock from "./companyBlock/companyBlock";
import Dishes from "./dishes/dishes";
import { useDispatch, useSelector } from "react-redux";

import CardsWrapper from "./cardsWrapper/cardsWrapper";
import { getAllCategory, getPriceAllProducts, getTopProductsActions } from "../../redux/actions/mainPage";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation()
  const table = pathname.split('/').pop()
  localStorage.setItem('table',table)
  const data = useSelector((state) => state.MainData.products)
  const priceProducts = useSelector((state)=> state.MainData.allPrice)
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllCategory());
    dispatch(getTopProductsActions())
    dispatch(getPriceAllProducts())
  }, []);
  return (
    <div className={clas.main}>
      <CarouselPage />
      <CompanyBlock />
      <div className={clas.blockDeshes}>
        <Dishes />
        <CardsWrapper data={data && data} />
        <div className={clas.blockTitle}>
          <span className={clas.title}>Бургеры</span>
        </div>

       
      </div>
      <div className={clas.blockBasket}>
        <Link className={clas.link} to="/basket">
          <div className={clas.button}>
            <span className={clas.basketTitle}>Корзина</span>
            <span className={clas.basketPrice}>{priceProducts && priceProducts.totalPrice} сом</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Main;
