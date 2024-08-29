import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";
import ConfirmOrder from "./ConfirmOrder";

function Application() {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex justify-between w-full">
      <Menu />
      <Cart modal={modal} setModal={setModal} />

      {/* order confirm */}
      {modal && <ConfirmOrder />}
    </div>
  );
}

export default Application;
