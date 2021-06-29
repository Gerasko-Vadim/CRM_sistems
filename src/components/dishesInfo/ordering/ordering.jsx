import React from "react"
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import clas from "./ordering.module.css"

const Ordering = ({data}) => {
    return (
        <>
            <div className={clas.ordering}>
                <span className={clas.name}>
                    {data.name}
                </span>
                <span className={clas.about}>
                    
                </span>
                <span className={clas.additivesText}>
                    Добавки
                </span>
                <div className={clas.additivesBlock}>
                    <AdditivesList text="Дополнительно Сыр" price="20" id="1" />
                </div>

            </div>
            <BlockOrdered />
            <div className={clas.list}>
                <span className={clas.additivesText}>
                    Особые пожелания
                </span>
                <AdditivesList text="Дополнительно Сыр" price="20" id="2" />
                <AdditivesList text="Дополнительно Сыр" price="20" id="3" />
                <AdditivesList text="Дополнительно Сыр" price="20" id="4" />
                <AdditivesList text="Дополнительно Сыр" price="20" id="5" />
            </div>

        </>
    )
}
export default Ordering;