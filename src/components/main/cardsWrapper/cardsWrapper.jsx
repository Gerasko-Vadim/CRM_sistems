import React from "react"
import CardDishes from "../dishes/cards/cards";
import clas from "./cardsWrapper.module.css"

const CardsWrapper = ()=>{
    return(
        <div className={clas.wrapper}>
            <CardDishes/>
            <CardDishes/>
            <CardDishes/>
            <CardDishes/>
        </div>

    )
}
export default CardsWrapper;