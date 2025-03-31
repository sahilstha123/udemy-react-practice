import React from "react";

const Coreconcept = ({ title, image }) => {
  return (
    <div className="flex-1 p-4 group"> {/* Parent with 'group' */}
      <li className="w-full max-w-xs bg-gray-900 rounded-lg shadow-lg transition-all cursor-grab group-hover:scale-[0.85] hover:!scale-100 hover:shadow-2xl h-72 sm:h-full group-hover:blur-sm hover:!blur-none">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-40 sm:w-52 mx-auto object-cover md:w-48 h-40 sm:h-48"
        />

        {/* Card Content */}
        <div className="px-4 py-2">
          <h3 className="text-xl sm:text-2xl text-center font-semibold text-white">
            {title}
          </h3>
          <p className="mt-2 text-balance text-gray-300 lg:tracking-wider text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            maiores reprehenderit.
          </p>
        </div>
      </li>
    </div>
  );
};

export default Coreconcept;
