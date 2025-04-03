import React from "react";

const Coreconcept = ({ title, image, desc }) => {
  console.log("desc:", desc);

  return (
    <div className="p-2 flex justify-center">
      <li className="w-full max-w-[420px] sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900 rounded-lg shadow-lg transition-all cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-90
        hover:scale-100 hover:shadow-2xl h-auto sm:h-full flex flex-col items-center group p-4 ">
        
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg mt-4"
        />

        {/* Card Content */}
        <div className="px-4 py-5 w-full text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {title}
          </h3>
          <p className="mt-3 text-gray-300 text-base sm:text-lg  leading-relaxed">
            {desc}
          </p>
        </div>
      </li>
    </div>
  );
};

export default Coreconcept;
