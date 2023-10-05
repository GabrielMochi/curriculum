import type { ReactElement } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import type { SidebarProps, SidebarControllerReturn } from "./Sidebar.interface";
import globalCss from "../../../theme/globalCss";
import SidebarRecords from "../../molecules/SidebarRecords";

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
    <SidebarRecords title={t("contact.label")}>
      {contactRecords.map(({ label, value }) => (
        <Box key={label}>
          <Typography fontWeight="700" textTransform="uppercase">
            {label}
          </Typography>
          <Typography fontWeight="300">{value}</Typography>
        </Box>
      ))}
    </SidebarRecords>
    <SidebarRecords title={t("social.label")}>
      {socialRecords.map(({ label, url, logo }) => (
        <Link key={url} href={url} display="inline-flex" alignItems="center">
          <img src={logo} alt={label} width={20} height={20} />
          <Typography ml={1} fontWeight="300">
            {label}
          </Typography>
        </Link>
      ))}
    </SidebarRecords>
    <SidebarRecords title={t("academicEducation.label")} spacing={4}>
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
    </SidebarRecords>
  </Stack>
);

export default SidebarView;
