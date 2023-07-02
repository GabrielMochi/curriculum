import type { ReactElement } from "react";
import type { SidebarProps } from "./index";
import SidebarView from "./Sidebar.view";
import useSidebarController from "./Sidebar.controller";

const SidebarModule = (props: SidebarProps): ReactElement => {
  const sidebarController = useSidebarController();
  return <SidebarView {...props} {...sidebarController} />;
};

export default SidebarModule;
