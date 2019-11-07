import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { InputStyled } from "./Input.styles";

interface InputProps {
  placeholder?: string;
  label?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  borderColor,
  fullWidth,
}: InputProps) => {
  const placeholderProp = placeholder || "Placeholder";
  const labelProp = label || "Label";
  const borderColorProp = borderColor || "#0000003b";
  return (
    <StylesProvider injectFirst>
      <InputStyled
        id="standard-full-width"
        label={labelProp}
        placeholder={placeholderProp}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        bordercolor={borderColorProp}
        fullWidth={fullWidth}
      />
    </StylesProvider>
  );
};
