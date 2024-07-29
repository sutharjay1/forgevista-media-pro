import React from "react";
import { twMerge } from "tailwind-merge";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "max-w-7xl w-full mx-auto pt-20 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
