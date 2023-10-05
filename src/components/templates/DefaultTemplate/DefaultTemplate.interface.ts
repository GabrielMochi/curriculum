import type { ComponentProps } from "react";
import type Header from "../../organisms/Header";
import type Sidebar from "../../organisms/Sidebar";

export type DefaultTemplateProps = {
  header: ComponentProps<typeof Header>;
  sidebar: ComponentProps<typeof Sidebar>;
};
