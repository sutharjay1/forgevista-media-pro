import { twMerge } from "tailwind-merge";

export function P({ className, children }) {
  return (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-4", className)}>
      {children}
    </p>
  );
}
