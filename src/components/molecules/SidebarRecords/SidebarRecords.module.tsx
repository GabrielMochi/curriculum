import type { ReactElement } from "react";
import type { SidebarRecordsProps } from "./index";
import SidebarRecordsView from "./SidebarRecords.view";

const SidebarRecordsModule = (props: SidebarRecordsProps): ReactElement => (
  <SidebarRecordsView {...props} />
);

export default SidebarRecordsModule;
