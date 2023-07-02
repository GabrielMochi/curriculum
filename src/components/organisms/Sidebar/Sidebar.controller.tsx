import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export type SidebarControllerProps = {
  t: TFunction;
};

const useSidebarController = (): SidebarControllerProps => {
  const { t } = useTranslation();

  return { t };
};

export default useSidebarController;
