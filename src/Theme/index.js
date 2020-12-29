import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2e7971",
      main: "#43AEA2",
      dark: "#68beb4",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4c5257",
      main: "#20272D",
      dark: "#161b1f",
      contrastText: "#fff",
    },
  },
});

export default theme;
