import React from "react";

const Button = ({ label, className = "", handleOnButtonClick, handleOnMousedown, scaling, isMousedown }) => {
  const buttonStyles = `text-white text-2xl sm:text-3xl font-bold h-20 sm:h-24 sm:rounded-full shadow-md shadow-emerald-100 cursor-pointer transition-all duration-200  ${className}`;

  // Conditionally apply the scaling transform if the button is being pressed
  const scale = isMousedown === label ? scaling : null;

  return (
    <button
      className={buttonStyles}
      style={scale} // Apply the transform styles here
      onClick={() => handleOnButtonClick(label)}
      onMouseDown={() => handleOnMousedown(label)}
    >
      {label}
    </button>
  );
};


export default Button;
