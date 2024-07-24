import Button from "../common/Button";

function Cart() {
  const confirmOrder = function () {};
  return (
    <div className="flex-[30%] bg-white p-5 rounded-md">
      <h1 className="text-[#8f4533] font-bold text-3xl mb-4">Your Cart (0)</h1>
      <p>Classic Tiramisu</p>
      <div className="[&>*]:px-2">
        <span className="text-[#8f4533] font-bold">1x</span>
        <span>@ $5.50</span>
        <span>$5.50</span>
        <hr />
      </div>

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
