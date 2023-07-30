import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import shoppingCartIncrementAction from "../action-creator/shopping-cart-increment";
import shoppingCartDecrementAction from "../action-creator/shopping-cart-decrement";
import shoppingCartRemoveItemAction from "../action-creator/shopping-cart-remove-item";
import shoppingCartCheckoutAction from "../action-creator/shopping-cart-checkout";
import shoppingCartWishlistAction from "../action-creator/shopping-cart-wishlist-item";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      shoppingCartIncrementAction,
      shoppingCartDecrementAction,
      shoppingCartRemoveItemAction,
      shoppingCartCheckoutAction,
      shoppingCartWishlistAction,
    },
    dispatch
  );
};

export default useActions;
