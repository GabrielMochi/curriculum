import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export type SidebarControllerReturn = {
  t: TFunction;
};

const useSidebarController = (): SidebarControllerReturn => {
  const { t } = useTranslation();

  return { t };
};

export default useSidebarController;
