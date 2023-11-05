import type { ReactElement } from "react";
import { Stack } from "@mui/material";
import type { AcademicEducationProps } from "./AcademicEducation.interface";
import Text from "../../atoms/Text";

const AcademicEducationView = ({
  courseTitle,
  institutionName,
  period,
}: AcademicEducationProps): ReactElement => (
  <Stack spacing={2}>
    <Text fontWeight="700" textTransform="uppercase">
      {courseTitle}
    </Text>
    <Text fontWeight="300" textTransform="uppercase">
      {institutionName}
    </Text>
    <Text fontWeight="300">{`${period.startYear}${
      period.endYear ? ` - ${period.endYear}` : ""
    }`}</Text>
  </Stack>
);

export default AcademicEducationView;
