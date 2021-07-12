import React, { useMemo } from "react";
import clas from "./additives.module.css";
import "./style.scss";

export default function AdditivesList({
  text,
  checked,
  id,
  groupId,
  changeChecked,
  modifiers,
  checkMod,
  disabled
}) {
  const isChecked = useMemo(() => {
    const isItem = modifiers.find((item) => item.modifierId === id);
    return isItem ? true : false
  }, [modifiers]);
  return (
    <>
      {
        checkMod ? <div className="checkbox">
          <input type="checkbox" defaultChecked={isChecked} onClick={() => changeChecked(id, groupId)} id={id} className="checked1" disabled={!disabled} />
          <label htmlFor={id} >
            <span className="text">{text}</span>
          </label>
        </div>
          :
          <div className="checkbox">
            <input type="checkbox" defaultChecked={isChecked} onClick={() => changeChecked(id, groupId)} id={id} className="checked1" disabled={false} />
            <label htmlFor={id} >
              <span className="text">{text}</span>
            </label>
          </div>
      }
    </>

  );
}
