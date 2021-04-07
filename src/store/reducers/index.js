import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductsReducer from "./cartProducts";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  count: cartCounterReducer,
  cart: cartProductsReducer,
  todos: todoReducer,
});

export default rootReducer;
