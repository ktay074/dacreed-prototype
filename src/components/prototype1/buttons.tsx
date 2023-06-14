import React from "react";
import type { PropsWithChildren } from "react";

interface ButtonProps {
    className?: string; 
    text: string; 
    onClick?: () => void; // optional onClick 
}

const PrimaryButton = (props: ButtonProps) => {
    
    return (
        <button onClick={props.onClick} className="mr-8 py-2 px-4 text-l border-2 border-[#898989] font-bold rounded-lg bg-[#FAC01E]">
            {props.text}
        </button>  
    ) 
};

const SecondaryButton = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className="py-2 px-4 text-l border-2 border-[#898989] font-bold rounded-lg bg-[#FFF8ED]">
            {props.text}
        </button>
    )
}

export { PrimaryButton, SecondaryButton }

