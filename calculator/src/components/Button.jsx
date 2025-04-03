import React from "react";

const Button = ({ label, className = "" }) => {
  const buttonStyles = `text-white text-2xl sm:text-3xl font-bold h-20 sm:h-24 rounded-full shadow-md shadow-emerald-100 cursor-pointer transition-all duration-200 hover:scale-105 ${className}`;
  
  return <button className={buttonStyles}>{label}</button>;
};

export default Button;
