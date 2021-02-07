import React from "react"
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import clas from "./ordering.module.css"

const Ordering = ()=>{
    return(
        <>
        <div className={clas.ordering}>
            <span className={clas.name}>
            Большой бургер острый
            </span>
            <span className={clas.about}>
            Булочка, котлета из говядины, сыр, салат и т.д.
            </span>
            <span className={clas.additivesText}>
            Добавки
            </span>
            <div className={clas.additivesBlock}>
                <AdditivesList/>
            </div>
            
        </div>
        <BlockOrdered/>
        <div className={clas.list}>
        <AdditivesList/>
        <AdditivesList/>
        <AdditivesList/>
        <AdditivesList/>
        </div>
        
        </>
    )
}
export default Ordering;