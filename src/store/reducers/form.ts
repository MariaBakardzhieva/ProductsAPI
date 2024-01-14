import { ActionTypes } from "../constants/action-types";

const initialState = {};

export const formReducer = (state: {} = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, ...action.payload };
    case ActionTypes.CREATE_USER:
      return { ...state, ...action.payload };
    case ActionTypes.UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
