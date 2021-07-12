import React from "react"

import AdditivesList from "../additivesItem/additivesItem";
import ContainerGroup from "./container"
// props:
// default_amount: 0
// group_id: "8f5aa50f-43bb-4132-a14a-2331f3429ef4"
// max_amount: 1
// min_amount: 1
const ModificatorGroup = ({ items, changeChecked, modifiers }) => {
    const checkProps =(id, groupId)=>{
        const isItem = modifiers.find((item)=>item.modifierId === id)

    }
    return (
        <>
            {
                items && items.map((item) => <ContainerGroup item={item} modifiers={modifiers} changeChecked={changeChecked}/>)
            }

        </>


    )
}
export default ModificatorGroup;