import { useTranslation } from "react-i18next";
import type { JobDetailsControllerReturn } from "./JobDetails.interface";

const useJobDetailsController = (): JobDetailsControllerReturn => {
  const { t } = useTranslation();
  return { t, periodDateFormat: t("professionalHistory.periodDateFormat") };
};

export default useJobDetailsController;
