import type { ReactElement } from "react";
import type { SidebarStackProps } from "./SidebarStack.interface";
import SidebarStackView from "./SidebarStack.view";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";

const SidebarStack = (props: SidebarStackProps): ReactElement => (
  <ComponentBuilder props={props} view={SidebarStackView} />
);

export default SidebarStack;
