import React from "react";
import { SignInButton } from "./SignInButton";

export default {
  title: "Sign In Button",
};

export const Facebook: React.FC = () => (
  <SignInButton type="facebook" bordercolor="#3b5998">
    Continue with Facebook
  </SignInButton>
);

export const Google: React.FC = () => (
  <SignInButton type="google" bordercolor="#db4437">
    Continue with Google
  </SignInButton>
);

export const Email: React.FC = () => (
  <SignInButton type="email" bordercolor="#5600e8">
    Continue with Email
  </SignInButton>
);
