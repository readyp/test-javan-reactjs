import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingCart from "./screens/ShoppingCart";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <ShoppingCart />
      <ToastContainer />
    </div>
  );
};

export default App;
