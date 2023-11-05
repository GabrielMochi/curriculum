import type { ComponentProps } from "react";
import type { Typography } from "@mui/material";

export type TitleProps = Omit<ComponentProps<typeof Typography>, "variant">;
