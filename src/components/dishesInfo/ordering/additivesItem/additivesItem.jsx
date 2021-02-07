import React from 'react';
import clas from "./additives.module.css"



export default function AdditivesList() {
  return (
  <div className={clas.addItem}>
      <input type="checkbox" className={clas.checked}/>
      <span className={clas.text}>Дополнительно Сыр</span>
      <span className={clas.price}>+20 сом</span>
  </div>
  );
}