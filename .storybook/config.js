import { muiTheme } from "storybook-addon-material-ui";
import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import theme from "../src/MuiTheme";

addDecorator(muiTheme(theme));

configure(require.context("../src/", true, /\.stories\.tsx$/), module);
