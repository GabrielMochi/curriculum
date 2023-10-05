import { useTranslation } from "react-i18next";
import { Box, Link } from "@mui/material";
import linkedinLogoSvg from "../../assets/images/social/linkedin-logo.svg";
import githubLogoSvg from "../../assets/images/social/github-logo.svg";
import stackOverflowLogoSvg from "../../assets/images/social/stack-overflow-logo.svg";
import type { IndexControllerReturn } from "./IndexPage.interface";

const useIndexPageController = (): IndexControllerReturn => {
  const { t } = useTranslation();

  // TODO: split the properties values below into multiple files and then bundle then (?)

  const defaultTemplateData: IndexControllerReturn["defaultTemplateData"] = {
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
      academicEducationRecords: [
        {
          courseTitle: t("academicEducation.fatec.courseTitle"),
          institutionName: t("academicEducation.fatec.institutionName"),
          period: {
            startYear: t("academicEducation.fatec.period.startYear"),
            endYear: t("academicEducation.fatec.period.endYear"),
          },
        },
        {
          courseTitle: t("academicEducation.ifsp.courseTitle"),
          institutionName: t("academicEducation.ifsp.institutionName"),
          period: {
            startYear: t("academicEducation.ifsp.period.startYear"),
            endYear: t("academicEducation.ifsp.period.endYear"),
          },
        },
        {
          courseTitle: t("academicEducation.prandiano.courseTitle"),
          institutionName: t("academicEducation.prandiano.institutionName"),
          period: {
            startYear: t("academicEducation.prandiano.period.startYear"),
          },
        },
        {
          courseTitle: t("academicEducation.conquer.courseTitle"),
          institutionName: t("academicEducation.conquer.institutionName"),
          period: {
            startYear: t("academicEducation.conquer.period.startYear"),
          },
        },
        {
          courseTitle: t("academicEducation.cellep.courseTitle"),
          institutionName: t("academicEducation.cellep.institutionName"),
          period: {
            startYear: t("academicEducation.cellep.period.startYear"),
            endYear: t("academicEducation.cellep.period.endYear"),
          },
        },
      ],
    },
  };

  return { defaultTemplateData };
};

export default useIndexPageController;
