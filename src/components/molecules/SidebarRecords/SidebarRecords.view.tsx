import type { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import type { SidebarRecordsProps } from "./index";
import Space from "../../atoms/Space";

const SidebarRecordsView = ({ title, children }: SidebarRecordsProps): ReactElement => (
  <Box>
    <Typography variant="h5" textTransform="uppercase">
      {title}
    </Typography>
    <Space height={2} />
    <Stack spacing={2}>{children}</Stack>
  </Box>
);

export default SidebarRecordsView;
