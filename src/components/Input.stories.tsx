import React from "react";
import { Input } from "./Input";

export default {
  title: "Input",
};

export const DefaultInput: React.FC = () => <Input />;

export const EmailInput: React.FC = () => (
  <Input label="email" placeholder="my@email.com" borderColor="#6200ee" />
);
