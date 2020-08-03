import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Button = () => {
  const context = useContext(ThemeContext);
  return (
    <button className="btn raise" onClick={context.toggleTheme}>
      {" "}
      Change Theme
    </button>
  );
};

export default Button;
