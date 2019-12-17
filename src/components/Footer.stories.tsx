import * as React from "react";
import { deepOrange } from "@material-ui/core/colors";
import { Footer } from "./Footer";

export default {
  title: "Footer",
};

export const Default: React.FC = () => <Footer />;

export const DeepOrange: React.FC = () => (
  <Footer backgroundcolor={deepOrange[500]} />
);
