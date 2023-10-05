import { useTranslation } from "react-i18next";
import type { SidebarControllerReturn } from "./Sidebar.interface";

const useSidebarController = (): SidebarControllerReturn => {
  const { t } = useTranslation();

  return { t };
};

export default useSidebarController;
