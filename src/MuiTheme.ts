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
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
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
