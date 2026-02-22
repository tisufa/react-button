import React from "react";

export interface ButtonProps {
  children: any;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
        color: "white",
      }}
    >
      {children}
    </button>
  );
};