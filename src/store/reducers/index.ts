import { combineReducers } from "redux";
import shoppingCartReducer from "./shopping-cart.reducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export default reducers;
