import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";

function Application() {
  return (
    <div className="flex">
      <Menu />
      <Cart />
    </div>
  );
}

export default Application;
