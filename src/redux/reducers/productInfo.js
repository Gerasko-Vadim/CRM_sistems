import { GET_PRODUCT_BY_ID } from "../actions/constants"

const initialState = {
    product: {}
};

export const ProductInfo = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: { ...action.payload }
            };
        default:
            return state
    }
};