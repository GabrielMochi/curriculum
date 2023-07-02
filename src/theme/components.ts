import type { ThemeOptions } from "@mui/material";

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: "400",
        fontSize: "1rem",
        lineHeight: "1.5",
        letterSpacing: "0.00938em",
        height: "100svh",
        display: "flex",
        flexDirection: "column",
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        flex: "1",
      },
    },
  },
};

export default components;
