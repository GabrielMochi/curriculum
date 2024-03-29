import { useTranslation } from "react-i18next";
import { Link } from "@mui/material";
import type { SidebarControllerReturn } from "./Sidebar.interface";
import linkedinLogoSvg from "../../../assets/images/social/linkedin-logo.svg";
import githubLogoSvg from "../../../assets/images/social/github-logo.svg";
import stackOverflowLogoSvg from "../../../assets/images/social/stack-overflow-logo.svg";

const useSidebarController = (): SidebarControllerReturn => {
  const { t } = useTranslation();

  const contactRecords: SidebarControllerReturn["contactRecords"] = [
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
      value: <Link href={`mailto:${t("contact.email.value")}`}>{t("contact.email.value")}</Link>,
    },
  ];

  const socialRecords: SidebarControllerReturn["socialRecords"] = [
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
  ];

  const academicEducationRecords: SidebarControllerReturn["academicEducationRecords"] = [
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
  ];

  return { t, contactRecords, socialRecords, academicEducationRecords };
};

export default useSidebarController;
