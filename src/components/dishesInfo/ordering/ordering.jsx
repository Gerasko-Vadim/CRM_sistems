import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AdditivesList from "./additivesItem/additivesItem";
import BlockOrdered from "./blockOrdered/blockOrdered";
import ModificatorGroup from "./modificator_group/modificator_group";
import clas from "./ordering.module.css";
import SizepriceGroup from "./sizeprice_group/sizeprice_group";
import 'react-toastify/dist/ReactToastify.css';

const Ordering = ({ data }) => {
    const [arrModifiers, setArrModifiers] = useState([]);
    const [modifiers, setModifiers] = useState([])
    const [sizeProduct, setSizeProduct] = useState([]);
    const [sizeId, setSizeId] = useState()


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
                return [...prevState, { modifierId: id, groupId, amount: "1" }]
            })
        }
    };



    console.log('size', sizeId)

    const pushProductToBasket = (amount) => {
        if (modifiers.length === 0) toast.error("Выберите хотябы один модификатор")
        else if (!sizeId) toast.error('Выберите размер')
        else {
            const arrProduct = JSON.parse(localStorage.getItem('products')) || [];
            console.log(arrProduct)
            const product = {
                "productId": data.id,
                "amount": amount,
                "name": data.name,
                "sizeId": sizeId,
                "comment": "\u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043a\u043e\u0442\u0438\u043a\u0430",
                "modifiers": modifiers
            }
            arrProduct.push(product)
            localStorage.setItem('products', JSON.stringify(arrProduct))
        }

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
            <BlockOrdered data={data} pushProductToBasket={pushProductToBasket} />

            <ModificatorGroup modifiers={modifiers} changeChecked={changeChecked} items={data.modifier_groups} />
            <SizepriceGroup items={data.sizeprice} changeChecked={(id) => setSizeId(id)} modifiers={sizeProduct} />
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