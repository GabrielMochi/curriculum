import "./i18n";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./theme";

// TODO: change favicon
// TODO: prevent indexing engines: https://support.thinkific.com/hc/en-us/articles/360030362134-How-do-I-stop-Google-from-indexing-my-site-
// TODO: add responsibility
// TODO: add option to download as PDF
// TODO: add readme
// TODO: add relative path

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
