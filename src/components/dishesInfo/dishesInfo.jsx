import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDataProductById } from "../../redux/actions/product";
import CardDishes from "../main/dishes/cards/cards";
import clas from "./dishesInfo.module.css";
import Ordering from "./ordering/ordering";
import Slider from "./slider/slider";

const DishesInfo = () => {
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const product = useSelector((state)=> state.ProductInfo.product)
  console.log(pathname.split("/").pop())
  useEffect(()=>{
    window.scrollTo(0,0)
    dispatch(getDataProductById(pathname.split("/").pop()))
  },[])
  return (
    <>
      <Slider images={product && product.imageLinks} />
      <Ordering data={product && product} />
      <div className={clas.similar}>
        <span className={clas.title}>Что-то еще?</span>
        <div className={clas.similarsBlock}>
         
        </div>
      </div>
    </>
  );
};
export default DishesInfo;

// ProductInfo:
// product:
// carbohydratesAmount: 0
// carbohydratesFullAmount: 0
// category_id: 1
// created_at: "2021-05-17T10:41:41.000000Z"
// description: null
// energyAmount: 0
// energyFullAmount: 0
// fatAmount: 0
// fatFullAmount: 0
// id: "e9adb358-2f1d-4f50-b2b0-6e41235617d7"
// imageLinks: ["https://qrmenu.artwaga.com/storage/products/e9adb3…17d7/H2X0xGZMgkHrYtnZAhAmEcwcfL2EjIi5TkAFsVbB.jpg"]
// is_recommended: 1
// measureUnit: "serv"
// modifier_groups: [{…}]
// modifiers: [{…}]
// name: "Капучино"
// proteinsAmount: 0
// proteinsFullAmount: 0
// sizeprice: (3) [{…}, {…}, {…}]
// tags: [{…}]
// updated_at: "2021-06-25T14:43:26.000000Z"
// weight: 0
