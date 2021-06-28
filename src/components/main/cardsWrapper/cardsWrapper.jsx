import React from "react"
import CardDishes from "../dishes/cards/cards";
import clas from "./cardsWrapper.module.css"

const CardsWrapper = ({ data }) => {
    return (
        <div className={clas.wrapper}>
            {
                data && data.map((item) => {
                    return (
                        <CardDishes key={item.id} data={item} />
                    )
                })
            }

        </div>

    )
}
export default CardsWrapper;