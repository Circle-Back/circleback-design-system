import * as React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { BaseButton } from "./Button.styles";
import theme from "../MuiTheme";

export interface ButtonProps {
  children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BaseButton backgroundcolor={theme.palette.primary.main}>
        {children}
      </BaseButton>
    </ThemeProvider>
  </StylesProvider>
);
