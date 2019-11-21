import * as React from "react";
import { Contextual } from "./Contextual";

export default {
  title: "Contextual",
};

export const Default: React.FC = () => (
  <Contextual
    name="category"
    title="Hardware"
    body="Lorem ipsum dolor sit amet..."
    image="./hardware.png"
  />
);
