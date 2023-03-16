import { MODE } from "redux/constant";

export const demoReducer = (state = "Redux Initiliazed", { type, payload }) => {
  switch (type) {
    case MODE:
      return payload;

    default:
      return state;
  }
};
