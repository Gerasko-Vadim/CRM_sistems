import { GET_ALL_PRICE_PRODUCTS, GET_TOP_PROPDUCTS, MAIN_DATA } from "../actions/constants";


const initialState = {
    arrayData: [],
    products:[],
    allPrice:{}
  };
  export function MainData(state = initialState, action) {
    switch (action.type) {
      case MAIN_DATA:
        return {
          ...state,
          arrayData: [...action.payload],
        };
      case GET_TOP_PROPDUCTS:
        return{
          ...state,
          products:[...action.payload]
        };
      case GET_ALL_PRICE_PRODUCTS:
        return{
          ...state,
          allPrice:{...action.payload}
        }
      default:
        return state;
    }
  }