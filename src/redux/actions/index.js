import { MODE } from "redux/constant";

export const demoAction = (value) => async (dispatch) => {
  return dispatch({
    type: MODE,
    payload: value,
  });
};
