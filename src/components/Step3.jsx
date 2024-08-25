import React from "react";

const Step3 = ({ formData, setFormData }) => {
  return (
    <div>
      <ul className="flex flex-wrap">
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full">
            Low
          </button>
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full">
            Medium
          </button>
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <button className="bg-purple-800 text-white font-bold py-2 px-4 rounded w-full">
            High
          </button>
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded w-full">
            Critical
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Step3;
