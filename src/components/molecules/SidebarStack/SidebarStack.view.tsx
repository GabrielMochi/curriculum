import type { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import type { SidebarStackProps } from "./SidebarStack.interface";
import Space from "../../atoms/Space";

const SidebarStackView = ({ title, children, spacing = 2 }: SidebarStackProps): ReactElement => (
  <Box>
    <Typography variant="h5" textTransform="uppercase">
      {title}
    </Typography>
    <Space height={16} />
    <Stack spacing={spacing}>{children}</Stack>
  </Box>
);

export default SidebarStackView;
