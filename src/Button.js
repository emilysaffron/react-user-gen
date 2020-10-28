import React from "react";
import "./Button.css";
const Button = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <button onClick={refreshPage}>Next</button>
    </div>
  );
};

export default Button;
