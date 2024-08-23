import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { removeItemsFromCart } from "../slices/productSlice";
import CartModal from "./CartModal";

function Cart() {
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [modal, setModal] = useState(false);

  const cartSelector = useSelector(
    (state: RootState) => state.products.cartProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const totalPrice = cartSelector.reduce((acc, curr) => acc + curr.price, 0);
    setTotalCartPrice(totalPrice);
  }, [cartSelector]);

  const confirmOrder = function () {
    setModal(true);
  };

  const removeItem = function (id: number) {
    dispatch(removeItemsFromCart(id));
  };

  return (
    <div className="sticky top-5 flex-[30%] bg-white p-5 rounded-md h-[50%]">
      <h1 className="text-[#8f4533] font-bold text-3xl mb-4">
        Your Cart ({cartSelector.length})
      </h1>

      {cartSelector.length === 0 ? (
        <>
          <img src="/images/illustration-empty-cart.svg" className="w-full" />
          <p className="text-[#8f4533] text-center font-semibold">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          {cartSelector.map((item) => {
            return (
              <>
                <p className="m-2">{item.name}</p>
                <div className="flex justify-between items-center">
                  <div className="[&>*]:px-2 mb-2">
                    <span className="text-[#8f4533] font-bold">1x</span>
                    <span>@ ${item.price}</span>
                    <span>${item.price}</span>
                  </div>

                  <div>
                    <img
                      src="/images/icon-remove-item.svg"
                      alt="remove-icon"
                      className="border border-[#8f4533] rounded-full p-1 cursor-pointer text-black hover:border-black"
                      onClick={removeItem.bind(null, item.id)}
                    />
                  </div>
                </div>
                <hr />
              </>
            );
          })}

          <div className="flex justify-between items-center my-5">
            <span>Order Total</span>
            <span className="text-3xl font-bold">${totalCartPrice}</span>
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
        </>
      )}

      {modal && <CartModal modal={modal} setModal={setModal} />}
    </div>
  );
}

export default Cart;
