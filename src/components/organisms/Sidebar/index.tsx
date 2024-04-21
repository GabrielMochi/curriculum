import type { ReactElement } from "react";
import SidebarView from "./Sidebar.view";
import useSidebarController from "./Sidebar.controller";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";

const Sidebar = (): ReactElement => (
  <ComponentBuilder controller={useSidebarController} view={SidebarView} />
);

export default Sidebar;
