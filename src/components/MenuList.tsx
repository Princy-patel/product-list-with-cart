import React from "react";
import { IMenuListProps } from "../@types/data";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { addToCarts } from "../slices/productSlice";

const MenuList: React.FC<IMenuListProps> = ({ data }) => {
  const dispatch = useDispatch();

  const addToCart = function () {
    dispatch(addToCarts(data));
  };

  return (
    <div className="p-2 text-left">
      <img
        src={data.image.thumbnail}
        alt={data.name}
        className="w-full h-auto will-change-transform rounded-md"
      />
      <div>
        <Button
          className="text-[#8f4533] border-[#8f4533] border-2 py-2 cursor-pointer w-full text-center rounded-full flex items-center justify-center mt-2 bg-white"
          onClick={addToCart}
        >
          <img
            src="/images/icon-add-to-cart.svg"
            alt="add-to-cart"
            className="h-5 w-5"
          />
          <span className="pl-1">Add to Cart</span>
        </Button>
      </div>

      <p className="text-[#8f4533]">{data.category}</p>
      <p className="text-lg font-medium">{data.name}</p>
      <span className="text-[#8f4533] font-medium text-lg">$ {data.price}</span>
    </div>
  );
};

export default MenuList;
