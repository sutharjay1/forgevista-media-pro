import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/formatDate.js";
import { H2 } from "./typographyh2.jsx";
import { P } from "./typographypara.jsx";

const BlogCard = ({ title, description, img, date, href }) => {
  return (
    <div className="w-full flex flex-1 flex-col  p-4">
      <img
        alt={title || "Blog Image"}
        src={
          img ||
          "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        }
        className="h-56 w-full rounded-3xl object-cover"
      />

      <div className="mt-4">
        <H2 className="text-xl font-bold text-zinc-900 hover:text-[#ff6400] transition-colors cursor-pointer">
          {title}
        </H2>
        <p className="text-sm text-gray-500 py-1">{formatDate(date)}</p>
        <P className="max-w-prose text-zinc-600 md:text-xl text-balance font-[400] ">
          {description}
        </P>
      </div>
      <Link
        to={href}
        className="block rounded-lg py-4 hover:text-[#ff6400] transition-colors cursor-pointer"
      >
        Read more <ArrowRight className="inline-block ml-2" />
      </Link>
    </div>
  );
};

export default BlogCard;
