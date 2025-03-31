import React, { useEffect, useState } from "react";
import reactCoreConcepts from "../assets/react-core-concepts.png";

const Header = () => {
  const description = ["Fundamental", "Core", "Crucial"];
  const [randomdescription, setrandomdescription] = useState("");
  const genRandom = (max) => Math.floor(Math.random() * max);
  useEffect(() => {
    setrandomdescription(description[genRandom(description.length)]);
  },[]);

  return (
    <header className="w-full max-w-2xl text-center mb-5">
      {/* Image Container */}
      <div className="flex justify-center mb-0">
        <img
          src={reactCoreConcepts}
          alt="React Core Concepts"
          className="w-40 sm:w-45 md:w-50 lg:w-55 xl:w-60"
        />
      </div>

      {/* Center "React Essentials" Responsively */}
      <h1 className="gradient font-bold mt-0">
        <span className="block sm:inline sm:text-7xl text-6xl">React</span>{" "}
        <span className="sm:text-7xl text-6xl block sm:inline ">Essentials</span>
      </h1>

      <p className="text-xl w-full mt-5 text-color">
        {randomdescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
};

export default Header;
