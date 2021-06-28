import React, { useState, useEffect } from "react";
import clas from "./dishes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategoryActions } from "../../../redux/actions/mainPage";

const Dishes = () => {
  const data = useSelector((state) => state.MainData.arrayData);
  const dispatch = useDispatch()
  const [active, setActive] = useState(0);


  const getProductsByCategory = (id) => {
    dispatch(getProductsByCategoryActions(id))
  }
  return (
    <div className={clas.blockDishes}>
      <div className={clas.dishes}>
        <div
          className={active == 0 ? clas.activeBtn : clas.noActive}
          onClick={() => setActive(0)}
        >
          Популярные блюда
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={active == index + 1 ? clas.activeBtn : clas.noActive}
                key={index}
                onClick={() => {
                  setActive(index + 1)
                  getProductsByCategory(item.id)
                }}
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Dishes;
