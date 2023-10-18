import { useTranslation } from "react-i18next";
import type { HeaderControllerReturn } from "./Header.interface";

const useHeaderController = (): HeaderControllerReturn => {
  const { t } = useTranslation();
  return { t };
};

export default useHeaderController;
