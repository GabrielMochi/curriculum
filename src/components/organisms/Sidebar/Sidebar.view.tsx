import type { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import type { SidebarProps } from "./index";
import type { SidebarControllerProps } from "./Sidebar.controller";
import globalCss from "../../../theme/globalCss";
import Space from "../../atoms/Space";
import theme from "../../../theme";

const SidebarView = ({
  t,
  contactRecords,
}: SidebarProps & SidebarControllerProps): ReactElement => (
  <Stack
    component="aside"
    spacing={2}
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
      <Space height={theme.spacing(3)} />
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
    <Box />
    {/* Academic Education */}
    <Box />
  </Stack>
);

export default SidebarView;
