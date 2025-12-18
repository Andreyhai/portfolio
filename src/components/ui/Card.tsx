import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradient?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, gradient = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300",
          hover &&
            "hover:shadow-xl hover:scale-[1.02] hover:border-[var(--primary)]",
          gradient && "gradient-primary text-white border-transparent",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export default Card;

