import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export type IndexControllerProps = {
  t: TFunction;
};

const useIndexController = (): IndexControllerProps => {
  const { t } = useTranslation();
  return { t };
};

export default useIndexController;
