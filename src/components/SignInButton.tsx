import React from "react";
import Grid from "@material-ui/core/Grid";
import { StylesProvider } from "@material-ui/core/styles";
import { TextGridItem, BaseButton } from "./SignIn.styles";

export interface SignInButtonProps {
  borderColor: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  borderColor,
  icon,
  children,
}: SignInButtonProps) => (
  <StylesProvider injectFirst>
    <BaseButton variant="contained" borderColor={borderColor}>
      <Grid container xs={12} spacing={0} item>
        <Grid item xs={2}>
          {icon}
        </Grid>
        <TextGridItem item xs={9}>
          {children}
        </TextGridItem>
      </Grid>
    </BaseButton>
  </StylesProvider>
);

export default SignInButton;
