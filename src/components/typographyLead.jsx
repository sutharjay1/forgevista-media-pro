import { twMerge } from "tailwind-merge";

export function TypographyLead({ children, className }) {
  return (
    <p
      className={twMerge(
        "text-lg text-muted-foreground tracking-normal mt-4 ml-1",
        className
      )}
    >
      {children}
    </p>
  );
}
