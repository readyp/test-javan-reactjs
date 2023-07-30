import React from "react";
import { toast } from "react-toastify";
import { FaHeart, FaTrash } from "react-icons/fa";
import ItemInterface from "../types/item.interface";
import useActions from "../store/hooks/useActions";

interface Props {
  cart: ItemInterface;
}

const CartListItem: React.FC<Props> = ({ cart }) => {
  const {
    shoppingCartIncrementAction,
    shoppingCartDecrementAction,
    shoppingCartRemoveItemAction,
    shoppingCartWishlistAction,
  } = useActions();

  const handleDecrement = (): void => {
    if (cart.count >= 1) {
      shoppingCartDecrementAction(cart.id);
    }
  };

  const handleWishlist = (): void => {
    shoppingCartWishlistAction(cart.id);
    toast.info(`${cart.name} moved to wishlist`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const renderedTags: React.ReactNode = cart.tag.map((item) => (
    <span className="uppercase font-thin text-xs">{item}</span>
  ));

  // render
  return (
    <div className="my-4 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 border-b md:gap-3 lg:gap-0 pb-4">
      {/* image */}
      <div className="col-span-1">
        <img
          className="h-48 block mx-auto mb-4 md:mb-0 object-contain max-w-[152px]"
          src={cart.image}
          alt={cart.name}
        />
      </div>

      {/* content */}
      <div className="col-span-2 lg:col-span-3">
        {/* item detail and item count */}
        <div className="flex md:flex-row flex-col md:justify-between mb-8">
          {/* Item Detail */}
          <div className="space-y-5 pr-16 mb-4 md:mb-0">
            {/* Item Name */}
            <p className="font-medium text-lg">{cart.name}</p>

            {/* Item Tag */}
            <div className="flex flex-wrap space-x-2">{renderedTags}</div>

            {/* Item Color */}
            <p className="font-thin uppercase text-xs">Color: {cart.color}</p>

            {/* Item Size */}
            <p className="font-thin uppercase text-xs">size: {cart.size}</p>
          </div>

          {/* Item count */}
          <div className="flex-1">
            <div className="md:ml-auto grid grid-cols-3 max-w-[100px]">
              <button
                disabled={cart.count <= 1}
                className="border-2 font-bold disabled:cursor-not-allowed disabled:opacity-30"
                onClick={handleDecrement}
              >
                -
              </button>
              <div className="border-t-2 border-b-2 text-center font-medium">{cart.count}</div>
              <button className="border-2 font-bold" onClick={() => shoppingCartIncrementAction(cart.id)}>
                +
              </button>
            </div>
          </div>
        </div>

        {/* Action and price */}
        <div className="flex justify-between">
          {/* Action */}
          <div className="text-xs flex space-x-2 flex-wrap">
            <button onClick={() => shoppingCartRemoveItemAction(cart.id)} className="flex items-center space-x-1">
              <FaTrash className="text-slate-400" />
              <span className="uppercase">remove item</span>
            </button>
            <button onClick={handleWishlist} className="flex items-center space-x-1">
              <FaHeart className="text-slate-400" />
              <span className="uppercase">Move to wishlist</span>
            </button>
          </div>

          {/* Item price */}
          <p className="font-medium">$ {cart.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
