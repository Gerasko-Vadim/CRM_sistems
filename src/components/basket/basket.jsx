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

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info('swipe action triggered')}>
      Action name
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => console.info('swipe action triggered')}
    >
      Delete
    </SwipeAction>
  </TrailingActions>
);


const Basket = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')) || [])
  }, [])

  return (
    <div className={clas.basketPage}>
      <div className={clas.navBar}>
        <Link to="/main">
          <img alt="back" src={back} />
        </Link>

        <span className={clas.title}>Корзина</span>
        <img alt="search" src={search} />
      </div>
      {
        products.length !== 0 ?
          <div>
            <SwipeableList>
              {
                products.map((item, index) => {
                  return (

                    <SwipeableListItem
                      style={{ background: "red" }}
                      leadingActions={leadingActions()}
                      trailingActions={trailingActions()}
                    >
                      <div className={clas.item}>
                        <span> {item.name}</span>
                        <span>{item.amount}</span>
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

      <div className={clas.fluidTabs}>
        <FluidTabs />
      </div>
    </div>
  );
};
export default Basket;
