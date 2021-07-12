
import React, { useState } from "react"
import clas from "../ordering.module.css"
import AdditivesList from "../additivesItem/additivesItem";

// props:
// default_amount: 0
// group_id: "8f5aa50f-43bb-4132-a14a-2331f3429ef4"
// max_amount: 1
// min_amount: 1
const ModificatorGroup = ({ items, changeChecked, modifiers }) => {
    const [active, setActive] = useState(false);
    const [mod, setMod] = useState([])


    const checkProps = (id, groupId) => {
        const min = items[0].props.min_amount;
        const max = items[0].props.max_amount;
        if (mod.includes(id)) {
            const newArr = mod.filter((item) => item !== id)
            setMod([...newArr])
        }
        else {
            setMod((prevState)=>[...prevState, id])
        }
        if (mod.length >= min && mod.length <= max) {
            setActive(false)

        }
        else{
            setActive(true)
        }




        console.log(mod);
        console.log(mod.find((item) => item === id));

    };

    return (
        <>
            {
                items && items.map((item) => {
                    return (
                        <div className={clas.list} key={item.id}>
                            <span className={clas.additivesText}>
                                {item.name} (min {item.props.min_amount}, max {item.props.max_amount})
                            </span>
                            {
                                item.modifiers.map((element) => <AdditivesList

                                    groupId={element.groupId}
                                    changeChecked={checkProps}
                                    text={element.name}
                                    price="20"
                                    id={element.id}
                                    key={element.id}
                                    modifiers={modifiers}
                                    checkMod={active}
                                    mod = {mod}
                                    disabled={mod.includes(element.id)}
                                
                                />)
                            }
                        </div>
                    )
                })
            }

        </>


    )
}
export default ModificatorGroup;