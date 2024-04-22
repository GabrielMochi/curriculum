import type { ReactElement } from "react";
import { Stack } from "@mui/material";
import type { AcademicEducationProps } from "./AcademicEducation.interface";
import Text from "../../atoms/Text";
import type { TranslationControllerReturn } from "../../../common/controllers/Translation.controller";

const AcademicEducationView = ({
  t,
  courseTitle,
  institutionName,
  period,
  isIncomplete = false,
}: AcademicEducationProps & TranslationControllerReturn): ReactElement => (
  <Stack spacing={1}>
    <Text fontWeight="700" textTransform="uppercase">
      {courseTitle}
    </Text>
    <Text fontWeight="300" textTransform="uppercase">
      {institutionName}
    </Text>
    <Text fontWeight="300">
      {`${period.startYear}${period.endYear ? ` - ${period.endYear}` : ""}`}
      {isIncomplete ? ` (${t("academicEducation.incomplete")})` : ""}
    </Text>
  </Stack>
);

export default AcademicEducationView;
