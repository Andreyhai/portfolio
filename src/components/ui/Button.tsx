import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 focus:ring-[var(--primary)] shadow-lg hover:shadow-xl",
      secondary:
        "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-90 focus:ring-[var(--secondary)] shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-[var(--border)] bg-transparent hover:bg-[var(--muted)] focus:ring-[var(--primary)]",
      ghost:
        "bg-transparent hover:bg-[var(--muted)] focus:ring-[var(--primary)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;

