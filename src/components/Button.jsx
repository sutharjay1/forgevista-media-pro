import React from "react";
import { twMerge } from "tailwind-merge";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  px,
  icon,
  bg,
  border,
  text,
  href,
  containerWidth,
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2 text-center font-semibold py-3 px-6 rounded-xl transition-colors duration-300";

  const variantClasses = {
    bg: "bg-[#ff6400] hover:bg-[#1f6351] text-zinc-50",
    border:
      "border border-[#ff6400] text-[#ff6400] hover:bg-[#ff6400] hover:text-zinc-50",
    text: "text-[#ff6400] hover:underline",
  };

  const classes = twMerge(
    baseClasses,
    bg && variantClasses.bg,
    border && variantClasses.border,
    text && variantClasses.text,
    containerWidth ? "w-full" : "w-fit",
    className
  );

  const content = (
    <button className={classes}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );

  return href ? (
    <Link to={href} className={containerWidth ? "w-full block" : "w-fit"}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default Button;
