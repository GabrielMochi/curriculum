import type { ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import type { SidebarControllerReturn } from "./Sidebar.interface";
import globalCss from "../../../theme/globalCss";
import SidebarSection from "../../molecules/SidebarSection";
import Contact from "../../molecules/Contact";
import Social from "../../molecules/Social";
import AcademicEducation from "../../molecules/AcademicEducation";
import Certification from "../../molecules/Certification";
import { FeatureFlag } from "../../../utils";

const SidebarView = ({
  t,
  contactRecords,
  socialRecords,
  academicEducationRecords,
  certificationRecords,
}: SidebarControllerReturn): ReactElement => (
  <Box
    component="aside"
    bgcolor="secondary.main"
    height="100%"
    px={globalCss.horizontalSpacing}
    py={globalCss.verticalSpacing}
  >
    <Grid
      container
      rowSpacing={globalCss.verticalSpacing}
      columnSpacing={globalCss.horizontalSpacing}
    >
      <FeatureFlag featureFlagKey="showContact">
        <Grid item xs={12} sm={6} md={12}>
          <SidebarSection title={t("contact.label")}>
            {contactRecords.map(({ label, value }) => (
              <Contact key={label} label={label} value={value} />
            ))}
          </SidebarSection>
        </Grid>
      </FeatureFlag>
      <FeatureFlag featureFlagKey="showSocial">
        <Grid item xs={12} sm={6} md={12}>
          <SidebarSection title={t("social.label")}>
            {socialRecords.map(({ label, url, logo }) => (
              <Social key={url} label={label} url={url} logo={logo} />
            ))}
          </SidebarSection>
        </Grid>
      </FeatureFlag>
      <FeatureFlag featureFlagKey="showAcademicEducation">
        <Grid item xs={12} sm={6} md={12}>
          <SidebarSection title={t("academicEducation.label")}>
            {academicEducationRecords.map(
              ({ courseTitle, institutionName, period, isIncomplete }) => (
                <AcademicEducation
                  key={courseTitle}
                  courseTitle={courseTitle}
                  institutionName={institutionName}
                  period={period}
                  isIncomplete={isIncomplete}
                />
              ),
            )}
          </SidebarSection>
        </Grid>
      </FeatureFlag>
      <FeatureFlag featureFlagKey="showCertifications">
        <Grid item xs={12} sm={6} md={12}>
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
        </Grid>
      </FeatureFlag>
    </Grid>
  </Box>
);

export default SidebarView;
