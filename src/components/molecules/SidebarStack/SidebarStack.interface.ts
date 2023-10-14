import type { PropsWithChildren } from "react";
import type { ResponsiveStyleValue } from "@mui/system";

export type SidebarStackProps = PropsWithChildren<{
  title: string;
  spacing?: ResponsiveStyleValue<string | number>;
}>;
