import { ActionType } from "../reducers/shopping-cart.reducer";

const shoppingCartCheckoutAction = (): ActionType => ({
  type: "CHECKOUT ITEM",
});

export default shoppingCartCheckoutAction;
