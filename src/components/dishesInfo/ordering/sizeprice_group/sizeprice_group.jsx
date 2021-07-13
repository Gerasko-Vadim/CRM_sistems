import React, { useState } from "react"
import clas from "../ordering.module.css"
import AdditivesList from "../additivesItem/additivesItem";

// props:
// default_amount: 0
// group_id: "8f5aa50f-43bb-4132-a14a-2331f3429ef4"
// max_amount: 1
// min_amount: 1
const SizepriceGroup = ({items, changeChecked, modifiers }) => {
    const [active, setActive] = useState(false);
    const [mod, setMod] = useState([]);


    const checkProps = (id) => {
        if (mod.includes(id)) {
            const newArr = mod.filter((item) => item !== id);
            setMod([...newArr])
        }
        else {
            setMod((prevState)=>[...prevState, id])
        }
        if (mod.length >= 1 && mod.length <= 1) {
            setActive(false)
        }
        else{
            setActive(true)
        }
    };


    return (
        <>
            {
                items && items.map((item) => {
                    console.log(item);
                    return (
                        <div className={clas.list} key={item.id}>
                            {
                                active ?
                                    <div className="checkbox">
                                        <input type="checkbox"
                                               id={item.id}
                                               onClick={() => checkProps(item.size.id)}
                                               className="checked1"
                                               disabled={!mod.includes(item.size.id)}/>
                                        <label htmlFor={item.id}>
                                            <span className="text">{item.size.name}</span>
                                        </label>
                                    </div>
                                    :
                                    <div className="checkbox">
                                        <input type="checkbox"
                                               id={item.id}
                                               onClick={() => checkProps(item.size.id)}
                                               className="checked1"
                                               disabled={false}/>
                                        <label htmlFor={item.id}>
                                            <span className="text">{item.size.name}</span>
                                        </label>
                                    </div>
                            }
                        </div>
                    )
                })
            }

        </>


    )
};
export default SizepriceGroup;
