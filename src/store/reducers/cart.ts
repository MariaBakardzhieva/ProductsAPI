import { ActionTypes } from "../constants/action-types";
import { CartItem } from "../types/types";

const initialState: CartItem[] = [];

export const cartReducer = (state: CartItem[] = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.INCREASE_CART_QUANTITY:
      const increase =
        state.find((item) => item.id === action.payload.id) == null;
      if (increase) {
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    case ActionTypes.DECREASE_CART_QUANTITY:
      const descrease =
        state.find((item) => item.id === action.payload.id);
      if (descrease?.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
