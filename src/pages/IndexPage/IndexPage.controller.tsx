import { useTranslation } from "react-i18next";
import type { IndexControllerReturn } from "./IndexPage.interface";

const useIndexPageController = (): IndexControllerReturn => {
  const { t } = useTranslation();
  return { t };
};

export default useIndexPageController;
