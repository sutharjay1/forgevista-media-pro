import { twMerge } from "tailwind-merge";

export function TypographyLead({ children, className }) {
  return (
    <p
      className={twMerge(
        "text-lg text-[#27272a]/80 tracking-normal mt-4 ml-1",
        className
      )}
    >
      {children}
    </p>
  );
}
