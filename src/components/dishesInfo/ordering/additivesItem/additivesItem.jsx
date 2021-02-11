import React from "react";
import clas from "./additives.module.css";
import "./style.scss";

export default function AdditivesList({text,price,id}) {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} className="checked1" />
      <label for={id}>
        <span className="text">{text}</span>
        <span className="price">+{price} сом</span>
      </label>
    </div>
  );
}
