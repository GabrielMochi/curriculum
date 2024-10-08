import type { ReactElement } from "react";
import { Box } from "@mui/material";
import Space from "../../atoms/Space";
import theme from "../../../theme";
import zigzag from "../../../assets/images/zigzag.svg";
import globalCss from "../../../theme/globalCss";
import Title from "../../atoms/Title";
import Callout from "../../atoms/Callout";
import type { TranslationControllerReturn } from "../../../common/controllers/Translation.controller";

const HeaderView = ({ t }: TranslationControllerReturn): ReactElement => (
  <Box
    component="header"
    bgcolor="primary.main"
    color="white"
    px={globalCss.horizontalSpacing}
    py={{ xs: 5, sm: 7, md: 10 }}
  >
    <Box>
      <Callout fontFamily="Raleway" textTransform="uppercase">
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
    <Box
      component="img"
      src={zigzag}
      alt="zigzag"
      height={{ xs: "21.375px", sm: "28.5px" }}
      width={{ xs: "228px", sm: "304px" }}
    />
  </Box>
);

export default HeaderView;
