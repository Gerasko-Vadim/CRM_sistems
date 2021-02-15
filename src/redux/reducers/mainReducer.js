import { MAIN_DATA } from "../actions/constants";


const initialState = {
    arrayData: [],
  };
  export function MainData(state = initialState, action) {
    switch (action.type) {
      case MAIN_DATA:
        return {
          ...state,
          arrayData: [...action.payload],
        };
      default:
        return state;
    }
  }