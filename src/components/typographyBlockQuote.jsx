import { twMerge } from "tailwind-merge";

export function BlockQuote({ children, className }) {
  return (
    <blockquote className={twMerge(className, "mt-6 border-l-2 pl-4")}>
      {children}
    </blockquote>
  );
}
