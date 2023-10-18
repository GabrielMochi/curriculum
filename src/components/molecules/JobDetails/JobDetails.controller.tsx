import { useTranslation } from "react-i18next";
import type { JobDetailsControllerReturn } from "./JobDetails.interface";

const useJobDetailsController = (): JobDetailsControllerReturn => {
  const { t } = useTranslation();
  return { t };
};

export default useJobDetailsController;
