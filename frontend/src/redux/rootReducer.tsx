import { combineReducers } from "redux";
import * as home from "../app/components/home/redux";
import * as cart from "../app/components/cart/redux";
import * as order from "../app/components/order/redux";

export const rootReducer = combineReducers({
  home: home.reducer,
  cart: cart.reducer,
  order: order.reducer,
});
