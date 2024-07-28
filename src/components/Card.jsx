import React from "react";
import { Motion } from "./Motion";

const Card = ({ title, description, img }) => {
  return (
    <Motion direction="up" duration={1.8}>
      <div className="relative w-full max-w-sm min-h-[28rem] overflow-hidden rounded-lg shadow-lg group">
        <div className="absolute inset-0">
          <img
            alt=""
            src={img}
            className="absolute inset-0 w-full h-full object-cover "
          />
        </div>
        <div className="relative px-6 py-10 sm:p-6 sm:py-10 lg:p-8 lg:py-12 bg-black bg-opacity-25 group-hover:bg-[#ff6400] transition-opacity group-hover:bg-opacity-50 flex flex-col justify-end min-h-[28rem] h-full">
          <div className="mt-8 transform opacity-0  transition-all group-hover:translate-y-0 group-hover:opacity-100 space-y-4">
            <p className="text-2xl font-bold text-white">{title}</p>
            <p className="text-sm sm:text-base text-white">{description}</p>
          </div>
        </div>
      </div>
    </Motion>
  );
};

export default Card;
