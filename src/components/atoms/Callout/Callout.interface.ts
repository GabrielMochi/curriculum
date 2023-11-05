import type { ComponentProps } from "react";
import type { Typography } from "@mui/material";

export type CalloutProps = Omit<ComponentProps<typeof Typography>, "variant">;
