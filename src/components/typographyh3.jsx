import { twMerge } from "tailwind-merge";

export function H3({ className, children }) {
  return (
    <h3
      className={twMerge(
        "scroll-m-20 text-2xl font-700 tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
