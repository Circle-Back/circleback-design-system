import * as React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { BaseButton } from "./Button.styles";
import theme from "../MuiTheme";

export interface ButtonProps {
  children: React.ReactNode;
  backgroundcolor?: string | undefined;
  textcolor?: string | undefined;
  bordercolor?: string | undefined;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundcolor,
  textcolor,
  bordercolor,
}: ButtonProps) => {
  const backgroundColorProp = backgroundcolor || "white";
  const textColorProp = textcolor || theme.palette.primary.main;
  const borderColorProp = bordercolor || theme.palette.primary.main;
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BaseButton
          textcolor={textColorProp}
          backgroundcolor={backgroundColorProp}
          bordercolor={borderColorProp}
        >
          {children}
        </BaseButton>
      </ThemeProvider>
    </StylesProvider>
  );
};
