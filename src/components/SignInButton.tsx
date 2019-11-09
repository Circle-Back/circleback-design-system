import React from "react";
import Grid from "@material-ui/core/Grid";
import { StylesProvider } from "@material-ui/core/styles";
import { TextGridItem, BaseButton } from "./SignIn.styles";
import { Icon } from "./Icon";

export interface SignInButtonProps {
  bordercolor: string;
  type: string;
  children: React.ReactNode;
}

const FacebookIcon: React.FC = () => (
  <Icon
    color="#3b5998"
    fillOpacity="0.74"
    viewBox="0 0 12 24"
    icon="facebook"
  />
);

const GoogleIcon: React.FC = () => (
  <Icon color="#db4437" fillOpacity="0.74" icon="google" />
);

const EmailIcon: React.FC = () => (
  <Icon color="#5600e8" fillOpacity="0.74" icon="email" />
);

interface ReadonlyReactElementsDictionary {
  readonly [index: string]: number | string | React.ReactElement;
}

const SIGNIN_ICONS: ReadonlyReactElementsDictionary = {
  facebook: <FacebookIcon />,
  google: <GoogleIcon />,
  email: <EmailIcon />,
};

export const SignInButton: React.FC<SignInButtonProps> = ({
  type,
  bordercolor,
  children,
}: SignInButtonProps) => (
  <StylesProvider injectFirst>
    <BaseButton color="secondary" variant="contained" bordercolor={bordercolor}>
      <Grid container xs={12} spacing={2} item>
        <Grid item xs={2}>
          {SIGNIN_ICONS[type]}
        </Grid>
        <TextGridItem item xs={10}>
          {children}
        </TextGridItem>
      </Grid>
    </BaseButton>
  </StylesProvider>
);
