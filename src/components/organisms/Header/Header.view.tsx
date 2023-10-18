import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { HeaderControllerReturn } from "./Header.interface";
import Space from "../../atoms/Space";
import theme from "../../../theme";
import zigzag from "../../../assets/images/zigzag.svg";
import globalCss from "../../../theme/globalCss";

const HeaderView = ({ t }: HeaderControllerReturn): ReactElement => (
  <Box
    component="header"
    bgcolor="primary.main"
    color="white"
    px={globalCss.horizontalSpacing}
    py={10}
  >
    <Box>
      <Typography variant="h2" textTransform="uppercase">
        <Box component="span" fontWeight="700">
          {t("intro.firstName")}
        </Box>{" "}
        <Box component="span" fontWeight="300">
          {t("intro.lastName")}
        </Box>
      </Typography>
      <Space height={theme.spacing(2)} />
      <Typography variant="h5" textTransform="uppercase">
        {t("intro.role")}
      </Typography>
    </Box>
    <Space height={theme.spacing(4)} />
    <Box height="28.5px" width="304px">
      <img height="28.5px" width="304px" src={zigzag} alt="zigzag" />
    </Box>
  </Box>
);

export default HeaderView;
