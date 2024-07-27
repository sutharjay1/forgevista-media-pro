import { twMerge } from "tailwind-merge";

export function InlineCode({ className, children }) {
  return (
    <code
      className={twMerge(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}
