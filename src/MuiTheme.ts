import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6200EE",
    },
    secondary: {
      main: "#BB86FC",
    },
    tertiary: "rgba(255, 255, 255, 0.6)",
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#7f39fb",
      secondary: "rgba(0, 0, 0, 0.74)",
    },
  },
  overrides: {
    MuiMenuItem: {
      root: {
        color: "rgba(0, 0, 0, 0.74)",
      },
    },
    MuiInputBase: {
      root: {
        color: "rgba(0, 0, 0, 0.87)",
      },
    },
  },
});

export default theme;
