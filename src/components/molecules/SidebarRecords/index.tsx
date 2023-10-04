import type { ReactElement } from "react";
import type { SidebarRecordsProps } from "./interface";
import SidebarRecordsView from "./SidebarRecords.view";
import BuildComponent from "../../../utils/BuildComponent";

const SidebarRecords = (props: SidebarRecordsProps): ReactElement => (
  <BuildComponent props={props} view={SidebarRecordsView} />
);

export default SidebarRecords;
