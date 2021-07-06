import React, { useMemo } from "react";
import clas from "./additives.module.css";
import "./style.scss";

export default function AdditivesList({
  text,
  checked,
  id,
  groupId,
  changeChecked,
  modifiers
}) {
  const isChecked = useMemo(()=>{
    const isItem = modifiers.find((item)=>item.modifierId === id)
    return isItem ? true : false
  },[modifiers])

  return (
    <div className="checkbox">
      <input type="checkbox" defaultChecked={isChecked} onClick={() => changeChecked(id, groupId)} id={id} className="checked1" />
      <label htmlFor={id} >
        <span className="text">{text}</span>
        {/* <span className="price">+{price} сом</span> */}
      </label>
    </div>
  );
}
