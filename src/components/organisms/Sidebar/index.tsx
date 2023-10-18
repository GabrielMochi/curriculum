import type { ReactElement } from "react";
import SidebarView from "./Sidebar.view";
import useSidebarController from "./Sidebar.controller";
import BuildComponent from "../../../utils/BuildComponent";

const Sidebar = (): ReactElement => (
  <BuildComponent controller={useSidebarController} view={SidebarView} />
);

export default Sidebar;
