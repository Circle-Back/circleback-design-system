import * as React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { AvatarStyled } from "./Avatar.styles";

export const Avatar: React.FC = () => (
  <StylesProvider injectFirst>
    <AvatarStyled>CB</AvatarStyled>
  </StylesProvider>
);
