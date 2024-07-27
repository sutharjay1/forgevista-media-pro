import React from "react";

const Card = ({ title, description, img }) => {
  return (
    <div className="min-h-48 min-w-32">
      <img
        src={img}
        className="w-full h-full object-cover rounded-2xl"
        alt="Feature"
      />
      <div className="min-w-[28rem] sm:min-w-0 relative group flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out z-10 min-h-[21.25rem]">
        <div className="absolute inset-0 -z-10 bg-[#f6f6ff] w-1/2 group-hover:w-full transition-all duration-300 ease-in-out" />
        <div className="flex justify-start items-center p-6 h-1/2">
          <div className="text-white text-4xl pl-5 translate-y-4 group-hover:translate-y-2 transition-all duration-300 ease-in-out">
            {title}
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
