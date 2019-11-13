import * as React from "react";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
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
  const theme = useTheme();
  const placeholderProp = placeholder || "Placeholder";
  const labelProp = label || "Label";
  const borderColorProp = borderColor || "#0000003b";
  return (
    <StylesProvider injectFirst>
      <InputStyled
        id="standard-full-width"
        color={theme.palette.text.secondary}
        label={labelProp}
        placeholder={placeholderProp}
        margin="normal"
        InputLabelProps={{
          shrink: true,
          color: "primary",
        }}
        variant="outlined"
        bordercolor={borderColorProp}
        fullWidth={fullWidth}
      />
    </StylesProvider>
  );
};
