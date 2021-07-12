import React, { useEffect, useLayoutEffect, useState } from "react"
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import clas from "./ordering.module.css"
import ModificatorGroup from "./modificator_group/modificator_group"
import ModifiersPrice from "./modifiers_price/modifiers_price"

const Ordering = ({ data }) => {
    const [arrModifiers, setArrModifiers] = useState([])
    const [modifiers, setModifiers] = useState([])
    const [arrPrice, setArrPrice] = useState([])
    useEffect(() => {
        setArrModifiers(data && data.modifiers)
        setArrPrice(data && data.sizeprice && data.sizeprice.map((item,index)=>{
            return{
                value: item.size ? ` ${item.size.name} ${item.current_price} сом` : ` ${item.current_price} сом`,
                label: item.size ? ` ${item.size.name} ${item.current_price} сом` : ` ${item.current_price} сом`,
                id: item.size ? item.size.id : null,
                index,
                checked: item.size ? false : true
            }
        }))
    }, [data])
    const changeChecked = (id, groupId) => {
        console.log(id, groupId)
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
            <BlockOrdered data={data && data}/>

            <ModificatorGroup modifiers={modifiers} changeChecked={changeChecked} items={data.modifier_groups} />
            <ModifiersPrice  items={arrPrice && arrPrice} defaultValue={[arrPrice&&arrPrice.length !== 0 ? arrPrice[0].value: null]} />
        </>
    )
}
// created_at: "2021-05-17T10:41:41.000000Z"
// current_price: 140
// id: 12
// in_menu: 1
// size:
// created_at: "2021-05-17T10:41:41.000000Z"
// id: "3805bc20-08e3-4bad-80f6-4bae9d94d238"
// is_default: 0
// name: "большой 0.7"
// priority: 2
// updated_at: "2021-05-17T10:41:41.000000Z"
export default Ordering;