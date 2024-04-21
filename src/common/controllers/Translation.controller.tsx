import { useTranslation } from "react-i18next";
import type { ControllerWithTranslation } from "../../types";

export type TranslationControllerReturn = ControllerWithTranslation;

const useTranslationController = (): TranslationControllerReturn => {
  const { t } = useTranslation();
  return { t };
};

export default useTranslationController;
