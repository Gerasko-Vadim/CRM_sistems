import React, { useEffect, useState } from "react";
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import ModificatorGroup from "./modificator_group/modificator_group";
import clas from "./ordering.module.css";
import SizepriceGroup from "./sizeprice_group/sizeprice_group";

const Ordering = ({ data }) => {
    const [arrModifiers, setArrModifiers] = useState([]);
    const [modifiers, setModifiers] = useState([]);
    const [sizeProduct, setSizeProduct] = useState([]);


    useEffect(() => {
        setArrModifiers(data && data.modifiers);
        setSizeProduct(data.sizeprice);
    }, [data]);


    const changeChecked = (id, groupId) => {
        const item = modifiers.find((el) => el.modifierId === id);
        if (item) {
            const newArr = modifiers.filter((item) => item.modifierId !== id);
            setModifiers(newArr)
        } else {
            setModifiers((prevState) => {
                return [...prevState, { modifierId: id, groupId }]
            })
        }
    };

    const addAmount = (amount) =>{
        // setModifiers((prevState) =>{
        //     return [...prevState, prevState[0]['amount'] = amount]
        // })
        modifiers[0]['amount'] = amount; //походу за хардкодил?
        console.log("modif", modifiers);
    };



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
                                    modifiers={modifiers} />
                            )

                        })
                    }

                </div>

            </div>
            <BlockOrdered data={data} addAmount={addAmount}/>

            <ModificatorGroup modifiers={modifiers} changeChecked={changeChecked} items={data.modifier_groups} />
            <SizepriceGroup items={data.sizeprice} changeChecked={changeChecked} modifiers={sizeProduct}/>
        </>
    )
};
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