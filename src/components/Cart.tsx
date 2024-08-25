import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { RootState } from "../store/store";
import { Fragment, useEffect, useState } from "react";
import { updateQuantity, removeItemsFromCart } from "../slices/productSlice";
import CartModal from "./CartModal";

function Cart() {
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [modal, setModal] = useState(false);

  const cartSelector = useSelector(
    (state: RootState) => state.products.cartProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const totalPrice = cartSelector.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    setTotalCartPrice(totalPrice);
  }, [cartSelector]);

  const confirmOrder = function () {
    setModal(true);
  };

  // remove items from cart
  const removeItem = function (id: number) {
    dispatch(removeItemsFromCart(id));
  };

  // decrease item quantity
  const decrementItems = function (id: number) {
    dispatch(updateQuantity({ id, type: "decrement" }));
  };

  // increase item quantity
  const incrementItems = function (id: number) {
    dispatch(updateQuantity({ id, type: "increment" }));
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
              <Fragment key={item.id}>
                <div className="flex justify-between items-center w-full">
                  <p className="m-2 my-4">{item.name}</p>
                  <div className="my-2 border-2 border-[#8f4533] flex leading-3 justify-center items-center space-x-4 px-3 py-1 rounded-full">
                    <Button
                      className="text-xl"
                      onClick={decrementItems.bind(null, item.id)}
                    >
                      -
                    </Button>
                    <p className="text-xl font-semibold">{item.quantity}</p>
                    <Button
                      className="text-xl"
                      onClick={incrementItems.bind(null, item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="[&>*]:px-2 mb-2">
                    <span className="text-[#8f4533] font-bold">
                      {item.quantity} x
                    </span>
                    <span>${item.price}</span>
                    <span>${item.price * item.quantity}</span>
                  </div>

                  <div>
                    <img
                      src="/images/icon-remove-item.svg"
                      alt="remove-icon"
                      className="border border-[#010101] rounded-full p-1 cursor-pointer text-black hover:border-black"
                      onClick={removeItem.bind(null, item.id)}
                    />
                  </div>
                </div>
                <hr />
              </Fragment>
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
