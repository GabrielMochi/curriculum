import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export type SidebarControllerReturnType = {
  t: TFunction;
};

const useSidebarController = (): SidebarControllerReturnType => {
  const { t } = useTranslation();

  return { t };
};

export default useSidebarController;
