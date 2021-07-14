import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clas from "./basket.module.css";
import FluidTabs from "./fluidTabs/fluidTabs";
import back from "./img/back.png";
import search from "./img/Search.png";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';



const trailingActions = (id) => {
  const deleteProduct = () => {
    const newArr = JSON.parse(localStorage.getItem('products')).filter((item) => item.productId !== id)
    localStorage.setItem('products', JSON.stringify(newArr))
    console.log('swipe', id)
  }
  return (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => deleteProduct()}
      >
        <div className={clas.deleteBlock}>
          <div className={clas.deleteIcon}>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5H3H19" stroke="#FC001C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z" stroke="#FC001C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 10V16" stroke="#FC001C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 10V16" stroke="#FC001C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>


        </div>
      </SwipeAction>
    </TrailingActions>
  )

}




const Basket = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')) || [])
  }, [])

  return (
    <div className={products.length == 0 ? clas.basketPage : clas.basketPage2}>
      <div className={clas.navBar}>
        <Link to="/main">
          <img alt="back" src={back} />
        </Link>

        <span className={clas.title}>Корзина</span>
        <img alt="search" src={search} />
      </div>
      {
        products.length !== 0 ?
          <div className={clas.listItem}>
            <SwipeableList>
              {
                products.map((item, index) => {
                  return (

                    <SwipeableListItem



                      trailingActions={trailingActions(item.productId)}
                    >
                      <div className={clas.item}>
                        <span> {item.name}</span>
                        <span>{item.amount}x</span>
                      </div>
                    </SwipeableListItem>

                  )
                })
              }
            </SwipeableList>
          </div>
          : <div className={clas.content}>
            <span className={clas.content_title}>В корзине пусто</span>
            <span className={clas.content_descrip}>
              У нас есть большой ассортимент, вы обязательно найдете что-то для
              себя!
            </span>
            <Link className={clas.link} to="/main">
              <button className={clas.button}>В меню</button>
            </Link>


          </div>
      }

      {
        products.length == 0 ?
          <div className={clas.fluidTabs}>
            <FluidTabs />
          </div>

          : <div className={clas.paymentBlock}>
            <div className={clas.priceBlock}>
              <span className={clas.total}>Итого:</span>
              <span className={clas.totalPrice}>450 сом</span>
            </div>
            <button className={clas.btnOrder}>Перейти к оплате </button>
          </div>
      }
    </div>
  );
};
export default Basket;
