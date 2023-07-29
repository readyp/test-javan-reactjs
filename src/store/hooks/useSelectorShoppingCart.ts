import { useSelector } from "react-redux";
import { RootState } from "../store";

const useSelectorShoppingCart = () => useSelector((state: RootState) => state.shoppingCart);

export default useSelectorShoppingCart;
