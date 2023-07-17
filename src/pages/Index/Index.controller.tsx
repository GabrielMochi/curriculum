import { useTranslation } from "react-i18next";
import { Box, Link } from "@mui/material";
import type { DefaultTemplateProps } from "../../components/templates/DefaultTemplate";
import linkedinLogoSvg from "../../assets/images/social/linkedin-logo.svg";
import githubLogoSvg from "../../assets/images/social/github-logo.svg";
import stackOverflowLogoSvg from "../../assets/images/social/stack-overflow-logo.svg";

export type IndexControllerReturnType = {
  defaultTemplateData: DefaultTemplateProps;
};

const useIndexController = (): IndexControllerReturnType => {
  const { t } = useTranslation();

  const defaultTemplateData: DefaultTemplateProps = {
    header: {
      title: (
        <>
          <Box component="span" fontWeight="700">
            {t("intro.firstName")}
          </Box>{" "}
          {t("intro.lastName")}
        </>
      ),
      subTitle: t("intro.role"),
    },
    sidebar: {
      contactRecords: [
        {
          label: t("contact.location.label"),
          value: t("contact.location.value"),
        },
        {
          label: t("contact.phone.label"),
          value: t("contact.phone.value"),
        },
        {
          label: t("contact.email.label"),
          value: (
            <>
              <span>📧</span>{" "}
              <Link href={`mailto:${t("contact.email.value")}`}>{t("contact.email.value")}</Link>
            </>
          ),
        },
      ],
      socialRecords: [
        {
          label: t("social.linkedin.label"),
          url: "https://www.linkedin.com/in/gabriel-mochi",
          logo: linkedinLogoSvg,
        },
        {
          label: t("social.github.label"),
          url: "https://github.com/GabrielMochi",
          logo: githubLogoSvg,
        },
        {
          label: t("social.stackOverflow.label"),
          url: "https://stackoverflow.com/users/7724011/gabriel-mochi",
          logo: stackOverflowLogoSvg,
        },
      ],
      academicEducationRecords: [],
    },
  };

  return { defaultTemplateData };
};

export default useIndexController;
