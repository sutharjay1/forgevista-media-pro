import React from "react";
import { H3 } from "./typographyh3";
import NumberTicker from "./NumberTicker";
import { twMerge } from "tailwind-merge";

const NumCard = ({ title, icon, value, className }) => {
  return (
    <div
      className={twMerge(
        "px-16 py-8  rounded-lg shadow-lg transition-transform transform ",
        className
      )}
    >
      <div className="w-full flex flex-col items-center justify-center mb-4 space-y-0">
        {icon}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-semibold flex items-center gap-1   ">
            <NumberTicker value={value} />{" "}
            <span className="text-[#ff6400] text-3xl">+</span>{" "}
          </span>
        </div>
        <H3 className="text-xl font-semibold text-zinc-700 text-center ">{title}</H3>
      </div>
    </div>
  );
};

export default NumCard;
