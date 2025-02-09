import { ReactElement, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    varient: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
}

const varientClasses = {
    primary: "bg-purple-700 text-white hover:bg-purple-200 hover:text-purple-800",
    secondary: "bg-purple-200 text-purple-800 hover:bg-purple-700 hover:text-white",
};

const defaultStyles =
    "px-4 py-2 rounded-md hover:shadow-md font-normal flex justify-between items-center space-x-2 hover:scale-105 transition-all duration-200";

export function Button({ varient, text, startIcon, className, ...rest }: ButtonProps) {
    return (
        <button
            className={`${varientClasses[varient]} ${defaultStyles} ${className ?? ""}`}
            {...rest} 
        >
            {startIcon}
            <span>{text}</span>
        </button>
    );
}
