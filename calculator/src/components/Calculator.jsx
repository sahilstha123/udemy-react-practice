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
  const [Display, setDisplay] = useState("0.00");
  const [Expression, setExpression] = useState("");
  const handleOnButtonClick = (value) => {
    console.log("Value clicked: ", value);
    // checks the button type is AC
    if (value === "AC") {
      setDisplay("0.00");
      setExpression("");
    }
    // checks the button type is C
    else if (value === "C") {
      setExpression((prev) => prev.slice(0, -1));
      setDisplay((prev) => (prev.length > 0 ? prev.slice(0, -1) : "0.00"));
    }
    // If the dot (.) button is clicked to input a decimal point
    else if (value === ".") {
      // Split the expression at operators (+, -, *, /, %) and check the last number
      const splitlastnumber = Expression.split(/[+\-/*%]/).pop();

      // checks that last expression includes (dot)
      if (splitlastnumber.includes(".")) return;

      // checks the last Expression include any computed opertor
      const isOperator = /[+\-*/%]/.test(Expression);
      const newExpression = isOperator
        ? Expression + "0" + value
        : Expression + value;
      setDisplay(newExpression);
      setExpression(newExpression);
    } else if (value === "=") {
      try {
        const result = eval(Expression);
        setDisplay(String(result));
        setExpression(String(result));
      } catch {
        setDisplay("error");
      }
    } else {
      const newExpression = Expression + value;
      setDisplay(newExpression);
      setExpression(newExpression);
    }
  };

  return (
    <div className="w-[50%] sm:w-[35%] mx-auto bg-black rounded-lg p-4 antialiased rotate">
      {/* Display Screen */}
      <header>
        <div className="text-white w-full min-h-20 bg-gray-900 rounded-lg text-right p-4 text-5xl flex justify-end items-center">
          {Display}
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
