import type { ReactElement } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import type { SidebarProps } from "./index";
import type { SidebarControllerReturn } from "./Sidebar.controller";
import globalCss from "../../../theme/globalCss";
import Space from "../../atoms/Space";
import theme from "../../../theme";

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
    {/* Contact  */}
    <Box>
      <Typography variant="h5" textTransform="uppercase">
        {t("contact.label")}
      </Typography>
      <Space height={theme.spacing(2)} />
      <Stack spacing={2}>
        {contactRecords.map(({ label, value }) => (
          <Box key={label}>
            <Typography fontWeight="700" textTransform="uppercase">
              {label}
            </Typography>
            <Typography>{value}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
    {/* Social */}
    <Box>
      <Typography variant="h5" textTransform="uppercase">
        {t("social.label")}
      </Typography>
      <Space height={theme.spacing(2)} />
      <Stack spacing={2}>
        {socialRecords.map(({ label, url, logo }) => (
          <Link key={url} href={url} display="inline-flex" alignItems="center">
            <img src={logo} alt={label} width={20} height={20} />
            <Typography ml={1}>{label}</Typography>
          </Link>
        ))}
      </Stack>
    </Box>
    {/* Academic Education */}
    {/* <Box /> */}
  </Stack>
);

export default SidebarView;
