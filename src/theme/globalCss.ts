import type { SxProps } from "@mui/material";
import type { ResponsiveStyleProps } from "../types";

export type GlobalCss = {
  horizontalSpacing: string | number | ResponsiveStyleProps;
  verticalSpacing: string | number | ResponsiveStyleProps;
  defaultIntercalationSpacing: string | number;
  defaultMarkdownStyles: SxProps;
};

const globalCss: GlobalCss = {
  horizontalSpacing: { xs: 4, md: 5 },
  verticalSpacing: { xs: 4, md: 6 },
  defaultIntercalationSpacing: "16px",
  defaultMarkdownStyles: {
    "& :first-child": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
    "& p": {
      marginTop: "16px",
      marginBottom: "16px",
    },
    "& li": {
      marginTop: "16px",
      marginBottom: "16px",
    },
  },
} as const;

export default globalCss;
