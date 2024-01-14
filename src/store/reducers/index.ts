import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { formReducer } from "./form";
import { productReducer, selectedProductReducer } from "./product";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  user: formReducer,
});

export default reducers;
