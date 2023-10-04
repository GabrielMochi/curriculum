import type { PropsWithChildren } from "react";
import type { ResponsiveStyleValue } from "@mui/system";
import SidebarRecords from "./SidebarRecords.module";

export type SidebarRecordsProps = PropsWithChildren<{
  title: string;
  spacing?: ResponsiveStyleValue<string | number>;
}>;

export default SidebarRecords;
