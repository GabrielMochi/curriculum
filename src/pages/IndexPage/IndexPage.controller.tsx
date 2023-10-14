import { useTranslation } from "react-i18next";
import type { IndexControllerReturn } from "./IndexPage.interface";
import useIndexPageContent from "./IndexPage.content";

const useIndexPageController = (): IndexControllerReturn => {
  const { t } = useTranslation();
  const content = useIndexPageContent({ t });
  return { content };
};

export default useIndexPageController;
