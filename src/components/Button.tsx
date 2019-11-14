import * as React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { BaseButton } from "./Button.styles";
import theme from "../MuiTheme";

export const Button: React.FC = () => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BaseButton backgroundcolor={theme.palette.primary.main}>
        Primary
      </BaseButton>
    </ThemeProvider>
  </StylesProvider>
);
