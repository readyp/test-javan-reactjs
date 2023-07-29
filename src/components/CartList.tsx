import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import CartListItem from "./CartListItem";
import CartInterface from "../types/item.interface";
import useSelectorShoppingCart from "../store/hooks/useSelectorShoppingCart";

interface Props {}

const CartList: React.FC<Props> = () => {
  const shoppingCart: CartInterface[] = useSelectorShoppingCart();

  const renderedShoppingCart: React.ReactNode = shoppingCart.map((cart) => <CartListItem key={cart.id} cart={cart} />);
  // render
  return (
    <div className="border rounded shadow-lg p-4 col-span-3 md:col-span-2">
      <p className="font-medium">
        Cart ({shoppingCart.length} item{shoppingCart.length > 1 ? "s" : null})
      </p>
      {renderedShoppingCart}

      {/* if cart empty */}
      {shoppingCart.length === 0 && (
        <React.Fragment>
          <p className="font-medium text-center text-4xl mt-8">Cart Kosong</p>
          <FaCartShopping className="block mx-auto my-4 text-6xl opacity-30" />
        </React.Fragment>
      )}
    </div>
  );
};

export default CartList;
