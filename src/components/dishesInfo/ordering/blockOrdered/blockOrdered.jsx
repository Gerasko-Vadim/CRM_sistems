import React, {useEffect, useState} from "react";
import clas from "./blockOrdered.module.css";

const BlockOrdered = ({data, addAmount}) => {
  const [number, setNumber] = useState(0);

  useEffect(() =>{
    console.log('ww',data);
  });


  const increment = () => {
    if (number > 1) setNumber(number - 1);
  };
  const decrement = () => {
    setNumber(number + 1);
  };


  return (
    <div className={clas.blockOrdered}>
      <div className={clas.blockTitle}>
        <div>
          <span className={clas.name}>Большой бургер острый</span>
          <span className={clas.weight}>230 г</span>
        </div>
        <span className={clas.price}>150 сом</span>
      </div>
      <div className={clas.bottomBlock}>
        <div className={clas.numberBurge}>
          <button onClick={increment}>-</button>
          <span>{number}</span>
          <button onClick={decrement}>+</button>
        </div>
        <button className={clas.addBtn} onClick={() => addAmount(number)}>Добавить</button>
      </div>
    </div>
  );
};
export default BlockOrdered;
