import { toast } from "react-toastify";
import API from "../API";
import { GET_ALL_PRICE_PRODUCTS, GET_TOP_PROPDUCTS, MAIN_DATA } from "./constants";

export function seccess(data) {
  return {
    type: MAIN_DATA,
    payload: data,
  };
}

export function getAllCategory() {
  return async (dispatch) => {
    await API.getAllCategory()
      .then((res) => {

        dispatch({ type: MAIN_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
}

export const getTopProductsActions = ()=>{
  return async dispatch => {
    await API.getTopProduct()
    .then(res=> dispatch(seccess(res.data)))
  }
  function seccess(json){return {type: GET_TOP_PROPDUCTS, payload: json}}
 
}

export const getProductsByCategoryActions =(id)=>{
  return async dispatch =>{
    await API.getProductsByCategory(id)
    .then(res => dispatch(seccess(res.data)))
  }
  function seccess(json){return {type: GET_TOP_PROPDUCTS, payload: json}}
}

export const getPriceAllProducts = ()=>{
  const products = JSON.parse(localStorage.getItem('products')) || []
  return async (dispatch)=>{
    await API.getAllPriceProducts({
      "table": localStorage.getItem('table') || "1e8538b8-8dd2-4a24-8e44-edfed03d51c3",
      "items": [...products]
    })
    .then(res => dispatch(seccess(res.data)))
    .catch(err=> console.log(err))
  }
  function seccess (json) {return {type:GET_ALL_PRICE_PRODUCTS, payload: json}}
}

export const createOrdered = ()=>{
  const products = JSON.parse(localStorage.getItem('products')) || []
  return async (dispatch)=>{
    await API.createOrdered({
      "table": localStorage.getItem('table') || "1e8538b8-8dd2-4a24-8e44-edfed03d51c3",
      "phone": null,
      "items": [...products]
    })
    .then(res => toast.seccess('Заказ принят! Ожидайте'))
    .catch(err=> toast.error('Что то пошло не так :('))
  }
  function seccess (json) {return {type:GET_ALL_PRICE_PRODUCTS, payload: json}}
}

