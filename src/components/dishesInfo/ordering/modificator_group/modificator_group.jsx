import React from "react"
import clas from "../ordering.module.css"
import AdditivesList from "../additivesItem/additivesItem";
// props:
// default_amount: 0
// group_id: "8f5aa50f-43bb-4132-a14a-2331f3429ef4"
// max_amount: 1
// min_amount: 1
const ModificatorGroup = ({ items, changeChecked, modifiers }) => {
    const checkProps =(id, groupId)=>{
        const isItem = modifiers.find((item)=>item.modifierId === id)
        if(!isItem){
            
        }

    }
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