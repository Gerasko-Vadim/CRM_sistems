import React, { useState } from "react";
import clas from "./blockOrdered.module.css";

const BlockOrdered = ({ data, addAmount, pushProductToBasket }) => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    if (number > 1){
      setNumber(number - 1)
    } 
  };
  const decrement = () => {
    setNumber(number + 1);

  };
  const addProduct =()=>{
 
    pushProductToBasket(number)
  }
  console.log(data)


  return (
    <div className={clas.blockOrdered}>
      <div className={clas.blockTitle}>
        <div>
          <span className={clas.name}>{data && data.name}</span>
         
        </div>
  
      </div>
      <div className={clas.bottomBlock}>
        <div className={clas.numberBurge}>
          <button onClick={increment}>-</button>
          <span>{number}</span>
          <button onClick={decrement}>+</button>
        </div>
        <button className={clas.addBtn} onClick={addProduct} >Добавить</button>
      </div>
    </div>
  );
};
export default BlockOrdered;
