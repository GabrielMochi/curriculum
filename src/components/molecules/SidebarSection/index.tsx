import type { ReactElement } from "react";
import type { SidebarSectionProps } from "./SidebarSection.interface";
import SidebarSectionView from "./SidebarSection.view";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";

const SidebarSection = (props: SidebarSectionProps): ReactElement => (
  <ComponentBuilder props={props} view={SidebarSectionView} />
);

export default SidebarSection;
