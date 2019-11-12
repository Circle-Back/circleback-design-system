import * as React from "react";
import { Input } from "./Input";

export default {
  title: "Input",
};

export const DefaultInput: React.FC = () => <Input />;

export const FullWidthInput: React.FC = () => <Input fullWidth />;

export const EmailInput: React.FC = () => (
  <Input label="email" placeholder="my@email.com" borderColor="#6200ee" />
);
