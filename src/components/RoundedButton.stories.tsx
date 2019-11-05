import React from "react";
import { action } from "@storybook/addon-actions";
import { RoundedButton } from "./RoundedButton";

export default { title: "Rounded Button" };

export const withText: React.FC = () => (
  <RoundedButton color="hotpink" onClick={action("clicked")}>
    Hello Button
  </RoundedButton>
);

export const withEmoji: React.FC = () => (
  <RoundedButton color="papayawhip" onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </RoundedButton>
);
