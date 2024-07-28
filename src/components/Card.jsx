import React from "react";

const Card = ({ title, description, img }) => {
  return (
    <div className="relative w-full max-w-sm min-h-[28rem] overflow-hidden rounded-lg shadow-lg group">
      <div className="absolute inset-0">
        <img
          alt=""
          src={img}
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity group-hover:opacity-50"
        />
      </div>
      <div className="relative p-4 sm:p-6 lg:p-8 bg-black bg-opacity-25 group-hover:bg-[#ff6400] transition-opacity group-hover:bg-opacity-50 flex flex-col justify-end min-h-[28rem] h-full">
        <div className="mt-8 transform opacity-0  transition-all group-hover:translate-y-0 group-hover:opacity-100 space-y-4">
          <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;