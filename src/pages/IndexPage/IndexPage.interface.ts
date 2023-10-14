import type { ComponentProps } from "react";
import type Header from "../../components/organisms/Header";
import type Sidebar from "../../components/organisms/Sidebar";

export type IndexPageContent = {
  header: ComponentProps<typeof Header>;
  sidebar: ComponentProps<typeof Sidebar>;
};

export type IndexControllerReturn = {
  content: IndexPageContent;
};
