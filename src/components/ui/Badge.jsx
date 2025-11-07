import React from "react";
import { cn } from "../../utils"; // Utility, falls du sie noch hast

/**
 * Badge Component
 * @param {string} variant - primary, secondary, success, danger, etc.
 * @param {string} size - sm, md, lg
 * @param {boolean} rounded - fully rounded badge
 * @param {ReactNode} children - Inhalt der Badge
 * @param {string} className - zusätzliche Klassen
 */
export function Badge({
    children,
    variant = "default",
    size = "md",
    rounded = true,
    className = "",
}) {
    const variants = {
        default: "bg-slate-700 text-white",
        primary: "bg-blue-600 text-white",
        secondary: "bg-slate-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    };

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
    };

    const borderRadius = rounded ? "rounded-full" : "rounded-md";

    return (
        <span
            className={cn(
                "inline-flex items-center font-medium gap-1 select-none",
                className || variants[variant] || variants.default,
                sizes[size] || sizes.md,
                borderRadius
            )}
        >
            {children}
        </span>
    );
}
