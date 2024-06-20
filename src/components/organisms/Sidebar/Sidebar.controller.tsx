import { Link } from "@mui/material";
import type { SidebarControllerReturn } from "./Sidebar.interface";
import linkedinLogoSvg from "../../../assets/images/social/linkedin-logo.svg";
import githubLogoSvg from "../../../assets/images/social/github-logo.svg";
import stackOverflowLogoSvg from "../../../assets/images/social/stack-overflow-logo.svg";
import useTranslationController from "../../../common/controllers/Translation.controller";
import { sortAcademicEducationRecords, sortCertificationRecords } from "../../../utils";

const useSidebarController = (): SidebarControllerReturn => {
  const { t } = useTranslationController();

  const contactRecords: SidebarControllerReturn["contactRecords"] = [
    {
      label: t("contact.location.label"),
      value: t("contact.location.value"),
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

  const academicEducationRecords: SidebarControllerReturn["academicEducationRecords"] =
    sortAcademicEducationRecords([
      {
        courseTitle: t("academicEducation.records.fatec.courseTitle"),
        institutionName: t("academicEducation.records.fatec.institutionName"),
        period: {
          startYear: 2020,
          endYear: 2021,
        },
        isIncomplete: true,
      },
      {
        courseTitle: t("academicEducation.records.ifsp.courseTitle"),
        institutionName: t("academicEducation.records.ifsp.institutionName"),
        period: {
          startYear: 2016,
          endYear: 2019,
        },
      },
    ]);

  const certificationRecords: SidebarControllerReturn["certificationRecords"] =
    sortCertificationRecords([
      {
        certificationTitle: t("certifications.records.conquer.certificationTitle"),
        institutionName: t("certifications.records.conquer.institutionName"),
        year: 2020,
      },
      {
        certificationTitle: t("certifications.records.conquerSales.certificationTitle"),
        institutionName: t("certifications.records.conquerSales.institutionName"),
        year: 2018,
      },
      {
        certificationTitle: t("certifications.records.ibmBluemix.certificationTitle"),
        institutionName: t("certifications.records.ibmBluemix.institutionName"),
        year: 2017,
      },
      {
        certificationTitle: t("certifications.records.prandiano.certificationTitle"),
        institutionName: t("certifications.records.prandiano.institutionName"),
        year: 2016,
      },
    ]);

  return { t, contactRecords, socialRecords, academicEducationRecords, certificationRecords };
};

export default useSidebarController;
