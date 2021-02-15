import React, { useState } from "react";
import clas from "./dishes.module.css";
import { useSelector } from "react-redux";

const Dishes = () => {
  const data = useSelector((state) => state.MainData.arrayData);
  const [active, setActive] = useState(0);

  return (
    <div className={clas.blockDishes}>
      <div className={clas.dishes}>
        <div
          className={active == 0 ? clas.activeBtn : clas.noActive}
          onClick={() => setActive(0)}
        >
          Все
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={active == index+1 ? clas.activeBtn : clas.noActive}
                key={index}
                onClick={() => setActive(index + 1)}
              >
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Dishes;
