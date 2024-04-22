import type { PropsWithChildren } from "react";
import type { ResponsiveStyleValue } from "@mui/system";

export type SidebarSectionProps = PropsWithChildren<{
  title: string;
  spacing?: ResponsiveStyleValue<string | number>;
}>;
