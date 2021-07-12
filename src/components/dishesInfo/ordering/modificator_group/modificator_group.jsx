import React, {useState} from "react"
import clas from "../ordering.module.css"
import AdditivesList from "../additivesItem/additivesItem";
// props:
// default_amount: 0
// group_id: "8f5aa50f-43bb-4132-a14a-2331f3429ef4"
// max_amount: 1
// min_amount: 1
const ModificatorGroup = ({ items, changeChecked, modifiers }) => {
    const mod = [];
    const [active, setActive] = useState(false);

    const checkProps =(id, groupId)=>{
        const isItem = modifiers.find((item)=>item.modifierId === id);
        if(!isItem){
            
        }
        const min =  items[0].props.min_amount;
        const max = items[0].props.max_amount;

        mod.push(id);

        //
        // if ((mod.length + 1) > max){
        //     if()
        //     setActive(true)
        // }else if((mod.length + 1) < min){
        //     setActive(true)
        // }



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