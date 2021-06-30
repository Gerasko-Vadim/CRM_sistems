import React, { useEffect, useLayoutEffect, useState } from "react"
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import clas from "./ordering.module.css"

const Ordering = ({data}) => {
    const [arrModifiers, setArrModifiers] = useState([])
    useEffect(()=>{
        setArrModifiers(data && data.modifier_groups && data.modifier_groups[0] &&  data.modifier_groups[0].modifiers)
    },[data])
    console.log(data)
    console.log(arrModifiers)
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
                    {
                      arrModifiers && arrModifiers.map((item,index)=>{
                    
                                return(
                                    <AdditivesList key={item.id} text={item.name} price="20" id={index} />
                                )
                           
                        })
                    }
                   
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
// modifier_groups: Array(1)
// 0:
// created_at: "2021-05-17T10:41:41.000000Z"
// description: ""
// id: "bbaeadf6-8a61-409f-9116-9948165982a5"
// imageLinks: []
// isGroupModifier: 1
// isIncludedInMenu: 1
// modifiers
export default Ordering;