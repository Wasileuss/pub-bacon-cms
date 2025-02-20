import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={clsx("border-2 border-gray-300 rounded-md px-2 py-[4px]", className)}
            {...props}
        />
    );
});

Input.displayName = "Input";

export default Input;
