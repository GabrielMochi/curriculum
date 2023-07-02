import type { ReactElement } from "react";
import { Box, Link } from "@mui/material";
import DefaultTemplate, { DefaultTemplateProps } from "../../components/templates/DefaultTemplate";
import type { IndexControllerProps } from "./Index.controller";

const IndexView = ({ t }: IndexControllerProps): ReactElement => {
  const fullNameTitle: DefaultTemplateProps["header"]["title"] = (
    <>
      <Box component="span" fontWeight="700">
        {t("intro.firstName")}
      </Box>{" "}
      {t("intro.lastName")}
    </>
  );

  const contactRecords: DefaultTemplateProps["sidebar"]["contactRecords"] = [
    {
      label: t("contact.location.label"),
      value: t("contact.location.value"),
    },
    {
      label: t("contact.email.label"),
      value: (
        <>
          <span>📧</span>{" "}
          <Link href={`mailto:${t("contact.email.value")}`}>{t("contact.email.value")}</Link>
        </>
      ),
    },
    {
      label: t("contact.phone.label"),
      value: t("contact.phone.value"),
    },
  ];

  return (
    <DefaultTemplate
      header={{
        title: fullNameTitle,
        subTitle: t("intro.role"),
      }}
      sidebar={{
        contactRecords,
        socialRecords: [],
        academicEducationRecords: [],
      }}
    />
  );
};

export default IndexView;
