// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "orange" | "blue";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium text-sm px-3 py-1.5 rounded-md border-none cursor-pointer transition-all duration-150 ease-out shadow-[0_5px_0] active:translate-y-[2px] active:shadow-[0_2px_0]";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-b from-[#fdb944] to-[#f9b233] text-black shadow-[#c47f00] hover:from-[#f5a623] hover:to-[#f2a200]",
    secondary:
      "bg-gradient-to-b from-[#b2e6ff] to-[#81d4fa] text-black shadow-[#7cc9e0] hover:from-[#7ed6ff] hover:to-[#5ec2f0]",
    orange:
      "bg-gradient-to-b from-[#fdb944] to-[#f9b233] text-black shadow-[#c47f00] hover:from-[#f5a623] hover:to-[#f2a200]",
    blue:
      "bg-gradient-to-b from-[#b2e6ff] to-[#81d4fa] text-black shadow-[#7cc9e0] hover:from-[#7ed6ff] hover:to-[#5ec2f0]",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
