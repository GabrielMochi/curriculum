import type { ReactElement } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import type { SidebarProps } from "./index";
import type { SidebarControllerReturn } from "./Sidebar.controller";
import globalCss from "../../../theme/globalCss";
import SidebarRecords from "../../molecules/SidebarRecords";

const SidebarView = ({
  t,
  contactRecords,
  socialRecords,
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
          <Typography>{value}</Typography>
        </Box>
      ))}
    </SidebarRecords>
    <SidebarRecords title={t("social.label")}>
      {socialRecords.map(({ label, url, logo }) => (
        <Link key={url} href={url} display="inline-flex" alignItems="center">
          <img src={logo} alt={label} width={20} height={20} />
          <Typography ml={1}>{label}</Typography>
        </Link>
      ))}
    </SidebarRecords>
    <SidebarRecords title={t("academicEducation.label")} />
  </Stack>
);

export default SidebarView;
