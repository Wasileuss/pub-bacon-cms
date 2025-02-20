import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

const buttonVariants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-orange-500 text-white hover:bg-orange-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    close: "bg-gray-500 text-white hover:bg-gray-600",
    delete: "bg-red-500 text-white hover:bg-red-600",
    disabled: "bg-gray-500 text-white cursor-not-allowed",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants;
}

const Button: FC<ButtonProps> = ({ children, variant = "primary", className, ...props }) => {
    return (
        <button
            className={clsx("px-4 py-[4px] rounded-md transition", buttonVariants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
