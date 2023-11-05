import type { ReactElement } from "react";
import { Box, Stack } from "@mui/material";
import type { SidebarStackProps } from "./SidebarStack.interface";
import Space from "../../atoms/Space";
import Title from "../../atoms/Title";

const SidebarStackView = ({ title, children, spacing = 2 }: SidebarStackProps): ReactElement => (
  <Box>
    <Title textTransform="uppercase">{title}</Title>
      {title}
    <Space height={16} />
    <Stack spacing={spacing}>{children}</Stack>
  </Box>
);

export default SidebarStackView;
