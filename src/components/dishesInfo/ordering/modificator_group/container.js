import React from "react"
import AdditivesList from "../additivesItem/additivesItem"
import clas from "../ordering.module.css"

const ContainerGroup = ({ item, changeChecked, modifiers }) => {
    // const max = item.props.max_amount
    // const checkProps = (id, groupId) => {
    //     let count = 1;
    //     modifiers.forEach(element => {
    //         if (element.groupId === groupId) count++;
    //     });
    //     if (max >= count) {
    //         changeChecked(id, groupId)
    //         console.log(max, count)
    //     }
    // }
    return (
        <>

                        <div className={clas.list} key={item.id}>
                            <span className={clas.additivesText}>
                                {item.name} (min {item.props.min_amount}, max {item.props.max_amount})
                            </span>
                            {
                                item.modifiers.map((element) => <AdditivesList
                                    groupId={element.groupId}
                                    changeChecked={changeChecked}
                                    text={element.name}
                                    id={element.id}
                                    key={element.id}
                                    modifiers={modifiers}
                                />)
                            }
                        </div>
 
        </>
    )
}
export default ContainerGroup;