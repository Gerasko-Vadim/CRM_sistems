import React, { useEffect, useLayoutEffect, useState } from "react"
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import clas from "./ordering.module.css"
import ModificatorGroup from "./modificator_group/modificator_group"

const Ordering = ({ data }) => {
    const [arrModifiers, setArrModifiers] = useState([])
    const [modifiers, setModifiers] = useState([])
    useEffect(() => {
        setArrModifiers(data && data.modifiers)
    }, [data])
    const changeChecked = (id, groupId) => {
        console.log('mura',id, groupId)
        const item = modifiers.find((el) => el.modifierId === id)
        console.log(item)
        if (item) {
            const newArr = modifiers.filter((item) => item.modifierId !== id)
            setModifiers(newArr)
        }
        else {
            setModifiers((prevState) => {
                return [...prevState, { modifierId: id, groupId }]
            })
        }
    }

    console.log("modif", modifiers)
    return (
        <>
            <div className={clas.ordering}>
                <span className={clas.name}>
                    {data.name}
                </span>
                <span className={clas.about}>

                </span>
                <span className={clas.additivesText}>
                    {arrModifiers && arrModifiers.length !== 0 ? "Добавки" : null}
                </span>
                <div className={clas.additivesBlock}>
                    {
                        arrModifiers && arrModifiers.map((item, index) => {
                            console.log('mura',item);
                            return (
                                <AdditivesList 
                                changeChecked={changeChecked}
                                 groupId={item.groupId}
                                  key={item.id} 
                                  text={item.name} 
                                  price="20"
                                   id={item.id} 
                                   modifiers={modifiers}/>
                            )

                        })
                    }

                </div>

            </div>
            <BlockOrdered />

            <ModificatorGroup   modifiers={modifiers} changeChecked={changeChecked} items={data.modifier_groups} />
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