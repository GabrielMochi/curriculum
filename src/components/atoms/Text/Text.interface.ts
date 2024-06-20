import type { ComponentProps } from "react";
import type { Typography } from "@mui/material";

export type TextProps = Omit<ComponentProps<typeof Typography>, "variant"> & {
  component?: React.ElementType;
};
