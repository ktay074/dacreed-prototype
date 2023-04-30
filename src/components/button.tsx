import React, {PropsWithChildren} from "react";

interface ButtonProps {
  title: string;
  isActive?: boolean; // optional boolean property
  onClick?: () => void; // make onClick handler optional
}

const PrimaryButton = ({ title, isActive, onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`mx-4 text-xl font-bold  border-indigo-200 border-2 py-2 px-7 mb-2 rounded-3xl ${
        isActive ? "bg-indigo-300" : "bg-indigo-500"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const SecondaryButton = ({ title }: PropsWithChildren<{ title: string }>) => {
  return(
    <button className="mx-16 text-xl font-bold bg-indigo-200 border-indigo-200 border-2  py-2 px-2 mb-2 rounded-3xl">
      <p className=""> {title}</p>
    </button>
  )
}

export { PrimaryButton, SecondaryButton }
