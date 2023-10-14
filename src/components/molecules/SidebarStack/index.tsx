import type { ReactElement } from "react";
import type { SidebarStackProps } from "./SidebarStack.interface";
import SidebarStackView from "./SidebarStack.view";
import BuildComponent from "../../../utils/BuildComponent";

const SidebarStack = (props: SidebarStackProps): ReactElement => (
  <BuildComponent props={props} view={SidebarStackView} />
);

export default SidebarStack;
