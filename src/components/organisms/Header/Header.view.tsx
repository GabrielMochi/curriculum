import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { HeaderControllerReturn } from "./Header.interface";
import Space from "../../atoms/Space";
import theme from "../../../theme";
import zigzag from "../../../assets/images/zigzag.svg";
import globalCss from "../../../theme/globalCss";
import Title from "../../atoms/Title";
import Callout from "../../atoms/Callout";

const HeaderView = ({ t }: HeaderControllerReturn): ReactElement => (
  <Box
    component="header"
    bgcolor="primary.main"
    color="white"
    px={globalCss.horizontalSpacing}
    py={10}
  >
    <Box>
      <Callout textTransform="uppercase">
        <Box component="span" fontWeight="700">
          {t("intro.firstName")}
        </Box>{" "}
        <Box component="span" fontWeight="300">
          {t("intro.lastName")}
        </Box>
      </Callout>
      <Space height={theme.spacing(2)} />
      <Title textTransform="uppercase">{t("intro.role")}</Title>
    </Box>
    <Space height={theme.spacing(4)} />
    <Box height="28.5px" width="304px">
      <img height="28.5px" width="304px" src={zigzag} alt="zigzag" />
    </Box>
  </Box>
);

export default HeaderView;
