import React from "react";
import Button from "./Button";

const Calculator = () => {
  const buttonLayout = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="w-[50%] sm:w-[35%] mx-auto bg-black rounded-lg p-4 antialiased rotate">
      {/* Display Screen */}
      <header>
        <div className="text-white w-full min-h-20 bg-gray-900 rounded-lg text-right p-4 text-5xl flex justify-end items-center">
          0.00
        </div>
      </header>

      {/* Calculator Buttons */}
      <div className="mt-5 grid grid-cols-4 gap-6 justify-center items-center">
        {buttonLayout.map((row, rowIndex) => {
          const isOperator = ["+", "-", "*", "%", "/", "="].includes(row);
          const buttonClass = isOperator
            ? "bg-orange-400 w-16 sm:w-24"
            : "bg-gray-500 w-16 sm:w-24";
          return (
            <Button
              key={`${rowIndex}`}
              label={row}
              className={row === "=" ? "col-span-2 rounded-lg w-full bg-orange-400" : buttonClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
