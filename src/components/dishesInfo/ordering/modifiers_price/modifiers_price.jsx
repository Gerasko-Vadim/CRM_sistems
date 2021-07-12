import React, { useEffect, useState } from "react"
import clas from "../ordering.module.css"

import "./style.scss"
import { Checkbox } from 'antd';


const ModifiersPrice = ({ items, defaultValue }) => {

    const [arrCheckbox, setArrCheckbox] = useState([])
    useEffect(() => {
        setArrCheckbox()
    })

    const onChange = (e) => {
        console.log(e)
    }
    console.log(defaultValue)
    return (
        <div className={clas.list}>
            <span className={clas.additivesText}>
                Размер
            </span>
            <CFormCheck
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Default radio"
            />
        </div>
    )
}

export default ModifiersPrice;

// 0:
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
// __proto__: Object
// updated_at: "2021-05-17T10:41:41.000000Z"
