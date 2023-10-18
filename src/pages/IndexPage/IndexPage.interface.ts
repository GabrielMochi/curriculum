import type { ComponentProps } from "react";
import type Sidebar from "../../components/organisms/Sidebar";

export type IndexPageContent = {
  sidebar: ComponentProps<typeof Sidebar>;
};

export type IndexControllerReturn = {
  content: IndexPageContent;
};
