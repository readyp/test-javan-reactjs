import { ActionType } from "../reducers/shopping-cart.reducer";

const shoppingCartRemoveItemAction = (payload: number): ActionType => ({
  payload,
  type: "REMOVE ITEM",
});

export default shoppingCartRemoveItemAction;
