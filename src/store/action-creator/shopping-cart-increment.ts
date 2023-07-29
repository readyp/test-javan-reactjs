import { ActionType } from "../reducers/shopping-cart.reducer";

const shoppingCartIncrementAction = (payload: number): ActionType => ({
  payload,
  type: "INCREMENT ITEM",
});

export default shoppingCartIncrementAction;
