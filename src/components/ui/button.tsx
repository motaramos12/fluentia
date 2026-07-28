import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", asChild = false, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-teal-500 text-white hover:bg-teal-600",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    const Component = asChild ? React.Fragment : "button";

    if (asChild) {
      return React.cloneElement(props.children as React.ReactElement, {
        className: `${baseStyles} ${variants[variant]} ${className}`,
        ref,
      });
    }

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
