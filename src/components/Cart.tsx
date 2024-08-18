import { useSelector } from "react-redux";
import Button from "../common/Button";
import { RootState } from "../store/store";

function Cart() {
  const cartSelector = useSelector((state : RootState) => state.products.cartProducts);

  const confirmOrder = function () {};
  return (
    <div className="flex-[30%] bg-white p-5 rounded-md">
      <h1 className="text-[#8f4533] font-bold text-3xl mb-4">Your Cart (0)</h1>
      <p className="m-2">Classic Tiramisu</p>
      <div className="flex justify-between items-center">
        <div className="[&>*]:px-2 mb-2">
          <span className="text-[#8f4533] font-bold">1x</span>
          <span>@ $5.50</span>
          <span>$5.50</span>
        </div>

        <div>
          <img
            src="/images/icon-remove-item.svg"
            alt="remove-icon"
            className="border border-[#8f4533] rounded-full p-1 cursor-pointer text-black hover:border-black"
          />
        </div>
      </div>
      <hr />

      <div className="flex justify-between items-center my-5">
        <span>Order Total</span>
        <span className="text-3xl font-bold">$46.50</span>
      </div>

      <div className="p-5 my-5 text-center rounded-lg bg-[#f6f0ef]">
        <p>
          This is a <b>Carbon-neutral</b> delivery
        </p>
      </div>
      <Button
        onClick={confirmOrder}
        className="bg-[#8f4533] w-full text-white py-3 rounded-full text-center cursor-pointer"
      >
        Confirm Order
      </Button>
    </div>
  );
}

export default Cart;
