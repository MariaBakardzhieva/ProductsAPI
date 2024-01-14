import { ActionTypes } from "../constants/action-types";
import { StoreItem } from "../types/types";

export const increaseCartQuantity = (product: StoreItem) => {
  return {
    type: ActionTypes.INCREASE_CART_QUANTITY,
    payload: product,
  };
};

export const decreaseCartQuantity = (product: StoreItem) => {
  return {
    type: ActionTypes.DECREASE_CART_QUANTITY,
    payload: product,
  };
};

export const removeFromCart = (product: StoreItem) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
