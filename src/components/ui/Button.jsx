import React from "react";
import { cn } from "../../utils"; // falls du die Hilfsfunktion aus utils/index.js hast

export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) {
  // Variant Styles
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white border border-transparent",
    secondary:
      "bg-slate-700 hover:bg-slate-800 text-white border border-transparent",
    outline:
      "bg-transparent border border-slate-600 text-white hover:bg-slate-800",
    danger:
      "bg-red-600 hover:bg-red-700 text-white border border-transparent",
  };

  // Size Styles
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
  };

  // Disabled Styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-inherit"
    : "";

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={cn(
        "transition-all font-medium flex items-center justify-center gap-2 select-none",
        variants[variant],
        sizes[size],
        disabledStyles,
        className
      )}
    >
      {children}
    </button>
  );
}
