import type { ReactElement } from "react";
import type { SidebarProps } from "./Sidebar.interface";
import SidebarView from "./Sidebar.view";
import useSidebarController from "./Sidebar.controller";
import BuildComponent from "../../../utils/BuildComponent";

const Sidebar = (props: SidebarProps): ReactElement => (
  <BuildComponent props={props} controller={useSidebarController} view={SidebarView} />
);

export default Sidebar;
