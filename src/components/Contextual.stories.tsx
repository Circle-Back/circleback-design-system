import * as React from "react";
import Box from "@material-ui/core/Box";
import { Contextual } from "./Contextual";

export default {
  title: "Contextual",
};

export const Default: React.FC = () => (
  <Box width="344px">
    <Contextual
      name="category"
      title="Hardware"
      body="Lorem ipsum dolor sit amet..."
      image="./hardware.png"
    />
  </Box>
);

export const WithButton: React.FC = () => (
  <Box width="344px">
    <Contextual
      name="category"
      title="Hardware"
      body="Lorem ipsum dolor sit amet..."
      image="./hardware.png"
      button
    />
  </Box>
);
