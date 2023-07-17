import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export type IndexControllerReturnType = {
  t: TFunction;
};

const useIndexController = (): IndexControllerReturnType => {
  const { t } = useTranslation();
  return { t };
};

export default useIndexController;
