import API from "../API"
import { GET_PRODUCT_BY_ID } from "./constants"


export const getDataProductById = (id) => {
    return async dispatch => {
        await API.getProductById(id)
            .then(res => dispatch(seccess(res.data)))
            .catch(err => console.log(err))
    }
    function seccess(json) { return { type: GET_PRODUCT_BY_ID, payload: json } }
}