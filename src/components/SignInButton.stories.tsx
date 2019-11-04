import React from "react";
import SignInButton from "./SignInButton";
import { FacebookIcon, GoogleIcon, EmailIcon } from "./SignIn.styles";

export default {
  title: "Sign In Button",
};

export const Facebook: React.FC = () => (
  <SignInButton borderColor="#3b5998" icon={<FacebookIcon />}>
    Continue with Facebook
  </SignInButton>
);

export const Google: React.FC = () => (
  <SignInButton borderColor="#db4437" icon={<GoogleIcon />}>
    Continue with Google
  </SignInButton>
);

export const Email: React.FC = () => (
  <SignInButton borderColor="#5600e8" icon={<EmailIcon />}>
    Continue with Email
  </SignInButton>
);
