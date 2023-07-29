import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {}

const Discount: React.FC<Props> = () => {
  return (
    <div className="border rounded shadow-lg p-4 font-thin flex justify-between items-center cursor-pointer">
      <p className="text-sm flex-1">Add a discount code [optional]</p>
      <FaChevronDown className="text-sm" />
    </div>
  );
};

export default Discount;
