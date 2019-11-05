import React from "react";
import { ColorProperty } from "csstype";

export interface RoundedButtonProps {
  color: ColorProperty;
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({
  color,
  children,
  onClick,
}: RoundedButtonProps) => (
  <button
    type="button"
    style={{
      backgroundColor: color,
      border: "none",
      color: "white",
      padding: 20,
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      borderRadius: 5,
    }}
    onClick={(): void => onClick()}
  >
    {children}
  </button>
);
