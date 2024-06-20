import type { SxProps } from "@mui/material";

export type GlobalCss = {
  horizontalSpacing: string | number;
  verticalSpacing: string | number;
  defaultIntercalationSpacing: string | number;
  defaultMarkdownStyles: SxProps;
};

const globalCss: GlobalCss = {
  horizontalSpacing: 5,
  verticalSpacing: 6,
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
