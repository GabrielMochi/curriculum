import type { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import type { SidebarRecordsProps } from "./interface";
import Space from "../../atoms/Space";

const SidebarRecordsView = ({
  title,
  children,
  spacing = 2,
}: SidebarRecordsProps): ReactElement => (
  <Box>
    <Typography variant="h5" textTransform="uppercase">
      {title}
    </Typography>
    <Space height={16} />
    <Stack spacing={spacing}>{children}</Stack>
  </Box>
);

export default SidebarRecordsView;
