import API from "../API";
import { GET_TOP_PROPDUCTS, MAIN_DATA } from "./constants";

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

export const getTopProducts = ()=>{
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

