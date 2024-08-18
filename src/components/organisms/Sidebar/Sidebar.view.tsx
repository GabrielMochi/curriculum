import type { ReactElement } from "react";
import { Stack } from "@mui/material";
import type { SidebarControllerReturn } from "./Sidebar.interface";
import globalCss from "../../../theme/globalCss";
import SidebarSection from "../../molecules/SidebarSection";
import Contact from "../../molecules/Contact";
import Social from "../../molecules/Social";
import AcademicEducation from "../../molecules/AcademicEducation";
import Certification from "../../molecules/Certification";

const SidebarView = ({
  t,
  contactRecords,
  socialRecords,
  academicEducationRecords,
  certificationRecords,
}: SidebarControllerReturn): ReactElement => (
  <Stack
    component="aside"
    spacing={globalCss.verticalSpacing}
    bgcolor="secondary.main"
    height="100%"
    px={globalCss.horizontalSpacing}
    py={globalCss.verticalSpacing}
  >
    <SidebarSection title={t("contact.label")}>
      {contactRecords.map(({ label, value }) => (
        <Contact key={label} label={label} value={value} />
      ))}
    </SidebarSection>
    <SidebarSection title={t("social.label")}>
      {socialRecords.map(({ label, url, logo }) => (
        <Social key={url} label={label} url={url} logo={logo} />
      ))}
    </SidebarSection>
    <SidebarSection title={t("academicEducation.label")}>
      {academicEducationRecords.map(({ courseTitle, institutionName, period, isIncomplete }) => (
        <AcademicEducation
          key={courseTitle}
          courseTitle={courseTitle}
          institutionName={institutionName}
          period={period}
          isIncomplete={isIncomplete}
        />
      ))}
    </SidebarSection>
    <SidebarSection title={t("certifications.label")}>
      {certificationRecords.map(({ certificationTitle, institutionName, year }) => (
        <Certification
          key={certificationTitle}
          certificationTitle={certificationTitle}
          institutionName={institutionName}
          year={year}
        />
      ))}
    </SidebarSection>
  </Stack>
);

export default SidebarView;
