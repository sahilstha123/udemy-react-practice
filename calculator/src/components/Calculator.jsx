import React, { useState } from "react";
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
  const Operators = ["%", "/", "*", "+", "-"];
  const [Display, setDisplay] = useState("0.00");
  const [isprank, setispprank] = useState(false);

  const displayTotal = () => {
    const ran = randomNumber();
    let expression = Display;
    const lastchar = expression[expression.length - 1];
    if (Operators.includes(lastchar)) {
      expression = expression.slice(0, -1);
    }
    try {
      const total = eval(expression) + ran;
      console.log("isprank", isprank);
      setDisplay(total.toString());
      if (ran !== 0) {
        setispprank(true);
      }
    } catch (error) {
      console.error("Error in evaluating:", error);
      setDisplay("Error");
    }
  };

  // random value to make a prank calc
  const randomNumber = () => {
    const num = Math.round(Math.random()*10);
    return num < 4 ? num : 0;
  };

  const buttonAction = (value) => {
    if (value === "AC") {
      setDisplay("0.00");
    } else if (value === "C") {
      setDisplay(Display.slice(0, -1) || "0.00");
    } else if (value === "=") {
      displayTotal();
    } else if (Operators.includes(value)) {
      const lastchar = Display[Display.length - 1];
      if (Operators.includes(lastchar)) {
        setDisplay(Display.slice(0, -1) + value);
      } else {
        setDisplay(Display + value);
      }
    } else if (value === ".") {
      const splitchar = Display.split(/[+\-*/%]/);
      if (splitchar.includes(".")) return;
      setDisplay(Display + value);
    } else {
      setDisplay((prev) => (prev === "0.00" ? value : prev + value));
    }
  };

  const handleOnButtonClick = (value) => {
    setispprank(false)
    buttonAction(value);
  };

  console.log("display", Display); // Log display state on every render

  return (
    <div className="w-[90%] sm:w-[65%] md:w-[60%] lg:w-[45%] xl:w-[35%] mx-auto bg-black rounded-lg p-4 antialiased rotate">
      {/* Display Screen */}
      <header>
        <div
          className={`text-white w-full min-h-20 bg-gray-900 rounded-lg text-right p-4 text-5xl flex 
          justify-end items-center ${isprank ? "prank" : ""} `}
        >
          {Display || "0.00"}
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
              className={
                row === "="
                  ? "col-span-2 rounded-lg w-full bg-orange-400"
                  : buttonClass
              }
              handleOnButtonClick={handleOnButtonClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
