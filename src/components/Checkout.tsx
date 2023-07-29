import React, { useState } from "react";
import Discount from "./Discount";
import useSelectorShoppingCart from "../store/hooks/useSelectorShoppingCart";
import CartInterface from "../types/item.interface";
import useActions from "../store/hooks/useActions";

interface Props {}

const Checkout: React.FC<Props> = () => {
  const { shoppingCartCheckoutAction } = useActions();
  const [isLoading, setLoading] = useState(false);

  const carts: CartInterface[] = useSelectorShoppingCart();

  const totalPrice = carts
    .reduce((acc, cart): number => {
      return (acc += cart.price * cart.count);
    }, 0)
    .toFixed(2);

  const handleCheckout = (): void => {
    if (carts.length >= 1) {
      setLoading(true);
      setTimeout(() => {
        shoppingCartCheckoutAction();
        alert("Checkout berhasil");
        setLoading(false);
      }, 1500);
    }
  };

  // render
  return (
    <div className=" col-span-1">
      <div className="border max-h-[266px] rounded shadow-lg mb-8 p-4">
        <p className="font-medium">The Total amount of</p>

        {/*  */}
        <div className="my-4 space-y-2 pb-4 border-b text-sm">
          <div className="flex justify-between">
            <p className="font-thin flex-1">Temporary amount</p>
            <p className="font-thin">${totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-thin flex-1">Shipping</p>
            <p className="font-thin">Gratis</p>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-between mb-4">
          <p className="font-medium w-36">The total amount of (including VAT)</p>
          <p className="font-medium">${totalPrice}</p>
        </div>

        {/* Action */}
        <button
          onClick={handleCheckout}
          disabled={isLoading || carts.length === 0}
          className="block px-4 py-2 bg-blue-500 rounded uppercase w-full font-medium tracking-tight text-sm text-white my-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Checkout..." : "Go To Checkout"}
        </button>
      </div>

      {/*  */}
      <Discount />
    </div>
  );
};

export default Checkout;
