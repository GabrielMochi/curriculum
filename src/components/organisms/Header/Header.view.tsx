import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { HeaderProps } from "./interface";
import Space from "../../atoms/Space";
import theme from "../../../theme";
import zigzag from "../../../assets/images/zigzag.svg";
import globalCss from "../../../theme/globalCss";

const HeaderView = ({ title, subTitle }: HeaderProps): ReactElement => (
  <Box
    component="header"
    bgcolor="primary.main"
    color="white"
    px={globalCss.horizontalSpacing}
    py={10}
  >
    <Box>
      <Typography variant="h2" textTransform="uppercase">
        {title}
      </Typography>
      <Space height={theme.spacing(2)} />
      <Typography variant="h5" textTransform="uppercase">
        {subTitle}
      </Typography>
    </Box>
    <Space height={theme.spacing(4)} />
    <Box height="28.5px" width="304px">
      <img height="28.5px" width="304px" src={zigzag} alt="zigzag" />
    </Box>
  </Box>
);

export default HeaderView;
