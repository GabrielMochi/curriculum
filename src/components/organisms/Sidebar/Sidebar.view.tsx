import type { ReactElement } from "react";
import { Stack, Typography } from "@mui/material";
import type { SidebarProps, SidebarControllerReturn } from "./Sidebar.interface";
import globalCss from "../../../theme/globalCss";
import SidebarStack from "../../molecules/SidebarStack";
import Contact from "../../molecules/Contact";
import Social from "../../molecules/Social";

const SidebarView = ({
  t,
  contactRecords,
  socialRecords,
  academicEducationRecords,
}: SidebarProps & SidebarControllerReturn): ReactElement => (
  <Stack
    component="aside"
    spacing={6}
    bgcolor="secondary.main"
    height="100%"
    px={globalCss.horizontalSpacing}
    py={6}
  >
    <SidebarStack title={t("contact.label")}>
      {contactRecords.map(({ label, value }) => (
        <Contact key={label} label={label} value={value} />
      ))}
    </SidebarStack>
    <SidebarStack title={t("social.label")}>
      {socialRecords.map(({ label, url, logo }) => (
        <Social key={url} label={label} url={url} logo={logo} />
      ))}
    </SidebarStack>
    <SidebarStack title={t("academicEducation.label")} spacing={4}>
      {academicEducationRecords.map(({ courseTitle, institutionName, period }) => (
        <Stack key={courseTitle} spacing={2}>
          <Typography fontWeight="700" textTransform="uppercase">
            {courseTitle}
          </Typography>
          <Typography fontWeight="300" textTransform="uppercase">
            {institutionName}
          </Typography>
          <Typography fontWeight="300">{`${period.startYear}${
            period.endYear ? ` - ${period.endYear}` : ""
          }`}</Typography>
        </Stack>
      ))}
    </SidebarStack>
  </Stack>
);

export default SidebarView;
