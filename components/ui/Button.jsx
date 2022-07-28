import React from "react";

const Button = React.forwardRef(function ({ children, onClick, classes }, ref) {
  return (
    <button onClick={onClick} className={"btn " + classes}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
