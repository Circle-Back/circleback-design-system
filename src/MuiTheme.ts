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
    text: {
      primary: "#7f39fb",
      secondary: "rgba(0, 0, 0, 0.74)",
    },
  },
});

export default theme;
