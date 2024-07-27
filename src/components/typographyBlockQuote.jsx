import { cn } from "@/lib/utils";

export function BlockQuote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={cn(className, "mt-6 border-l-2 pl-4")}>
      {children}
    </blockquote>
  );
}
