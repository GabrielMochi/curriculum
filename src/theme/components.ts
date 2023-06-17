import type { ThemeOptions } from "@mui/material";

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        "font-family": '"Roboto", "Helvetica", "Arial", sans-serif',
        "font-weight": 400,
        "font-size": "1rem",
        "line-height": 1.5,
        "letter-spacing": "0.00938em",
      },
    },
  },
};

export default components;
