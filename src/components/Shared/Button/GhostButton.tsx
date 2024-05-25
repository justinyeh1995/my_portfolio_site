import {twMerge} from "tailwind-merge";
import React, { ReactNode } from 'react';


// type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
//     children: ReactNode;
//     className?: string;
// };

export const GhostButton = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                "rounded-md px-4 py-2 text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};