import { ActionType } from "../reducers/shopping-cart.reducer";

const shoppingCartWishlistAction = (payload: number): ActionType => ({
  type: "WISHLIST ITEM",
  payload,
});

export default shoppingCartWishlistAction;
