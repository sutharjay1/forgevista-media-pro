import { twMerge } from "tailwind-merge";

export function P({ className, children, style }) {
  return (
    <p
      className={twMerge("leading-7 [&:not(:first-child)]:mt-4", className)}
      style={style}
    >
      {children}
    </p>
  );
}
