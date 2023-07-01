import type { ReactElement } from "react";
import { Box } from "@mui/material";
import DefaultTemplate from "../../components/templates/DefaultTemplate";
import type { IndexControllerProps } from "./Index.controller";

const IndexView = ({ t }: IndexControllerProps): ReactElement => (
  <DefaultTemplate
    header={{
      title: (
        <>
          <Box component="span" fontWeight="700">
            {t("intro.firstName")}
          </Box>{" "}
          {t("intro.lastName")}
        </>
      ),
      subTitle: t("intro.role"),
    }}
  />
);

export default IndexView;
