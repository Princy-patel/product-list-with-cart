import Menu from "./Menu";
import Cart from "./Cart";

function Application() {
  return (
    <div className="flex justify-between w-full">
      <Menu />
      <Cart />
    </div>
  );
}

export default Application;
