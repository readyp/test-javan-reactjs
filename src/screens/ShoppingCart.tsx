import React from "react";
import CartList from "../components/CartList";
import Checkout from "../components/Checkout";

interface Props {}

const ShoppingCart: React.FC<Props> = () => {
  return (
    <div className="mb-48">
      <header className="bg-slate-100 py-8 mb-4">
        <h1 className="tracking-tigh text-3xl text-center">Shopping cart</h1>
      </header>
      <div className="container grid md:grid-cols-3 grid-cols-1 mx-auto px-4 md:px-0 lg:max-w-[1080px] space-y-4 md:space-y-0 md:space-x-4">
        <CartList />
        <Checkout />
      </div>
    </div>
  );
};

export default ShoppingCart;
