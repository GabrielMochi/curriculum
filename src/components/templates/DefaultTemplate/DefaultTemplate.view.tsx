import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { DefaultTemplateProps } from "./index";
import Header from "../../organisms/Header";

const DefaultTemplateView = ({ header }: DefaultTemplateProps): ReactElement => (
  <Box>
    <Header {...header} />
  </Box>
);

export default DefaultTemplateView;
