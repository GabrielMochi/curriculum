import type { PropsWithChildren } from "react";
import type { ResponsiveStyleValue } from "@mui/system";

export type SidebarRecordsProps = PropsWithChildren<{
  title: string;
  spacing?: ResponsiveStyleValue<string | number>;
}>;
