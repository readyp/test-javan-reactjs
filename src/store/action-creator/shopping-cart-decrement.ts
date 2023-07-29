import { ActionType } from "../reducers/shopping-cart.reducer";

const shoppingCartDecrementAction = (payload: number): ActionType => ({
  payload,
  type: "DECREMENT ITEM",
});

export default shoppingCartDecrementAction;
