import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from "../common/Button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function CartModal({ modal, setModal }) {
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const cartSelector = useSelector(
    (state: RootState) => state.products.cartProducts
  );

  useEffect(() => {
    const totalPrice = cartSelector.reduce((acc, curr) => acc + curr.price, 0);
    setTotalCartPrice(totalPrice);
  }, [cartSelector]);

  return (
    <>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        onEscKeyDown={() => setModal(false)}
        center
      >
        <div className="mx-5">
          <img src="/images/icon-order-confirmed.svg" alt="" className="py-3" />
          <h1 className="text-3xl font-bold py-2">Order Confirmed</h1>
          <p className="text-[#8f4533]">We hope you enjoyed your food!</p>

          <div className="bg-[#fcf8f5] px-5 my-5 rounded-md">
            {cartSelector.map((item) => {
              return (
                <div className="flex justify-between space-x-11 py-3">
                  <div className="flex">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src={item.image.thumbnail}
                        alt={item.name}
                        className="rounded-md"
                      />
                    </div>

                    <div className="px-3">
                      <p className="pb-3 font-medium">{item.name}</p>
                      <div className="flex gap-5">
                        <p>1x</p>
                        <p>@ ${item.price}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold">${item.price}</p>
                </div>
              );
            })}

            <div className="flex items-center justify-between py-5">
              <p>Order Total</p>
              <h1 className="text-3xl font-bold">${totalCartPrice}</h1>
            </div>
          </div>

          <Button
            className={
              "bg-[#8f4533] w-full text-white py-3 rounded-full text-center cursor-pointer"
            }
          >
            Start New Order
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default CartModal;
