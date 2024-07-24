import React from "react";

function Button({ children, className, onClick }) {
  return (
    <div className={`${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
