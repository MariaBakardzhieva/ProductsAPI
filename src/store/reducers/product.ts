import { ActionTypes } from "../constants/action-types";
import { Action } from "../types/types";

const initialState = {
  products: [],
};

export const productReducer = (state: {} = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
