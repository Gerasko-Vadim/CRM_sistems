import API from "../API";
import { MAIN_DATA } from "./constants";

export function seccess(data) {
  return {
    type: MAIN_DATA,
    payload: data,
  };
}

export function mainGetCards() {
  return async (dispatch) => {
    await API.mainCards()
      .then((res) => {
        dispatch({ type: MAIN_DATA, payload: res.data.data });
      })
      .catch((err) => console.log(err));
  };
}
