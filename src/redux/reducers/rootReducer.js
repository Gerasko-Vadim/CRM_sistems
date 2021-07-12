import { combineReducers } from "redux";
import {MainData} from "./mainReducer"
import { ProductInfo } from "./productInfo";

export const rootReducer = combineReducers({
    MainData,
    ProductInfo
});