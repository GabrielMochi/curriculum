import type { HeaderProps } from "../../organisms/Header";
import type { SidebarProps } from "../../organisms/Sidebar";
import DefaultTemplate from "./DefaultTemplate.module";

export type DefaultTemplateProps = {
  header: HeaderProps;
  sidebar: SidebarProps;
};

export default DefaultTemplate;
