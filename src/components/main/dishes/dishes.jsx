import React from "react"
import clas from "./dishes.module.css"

const Dishes =()=>{
    return(
        <div className={clas.blockDishes}>
            <div className={clas.dishes}>
                <div>Популярные блюда</div>
                <div>Бургеры</div>
                <div>Закуски</div>
                <div>Популярные блюда</div>
                <div>Популярные блюда</div>

            </div>
        </div>
    )
}
export default Dishes;