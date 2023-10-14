import type { ReactElement } from "react";
import { Stack, Typography } from "@mui/material";
import type { AcademicEducationProps } from "./AcademicEducation.interface";

const AcademicEducationView = ({
  courseTitle,
  institutionName,
  period,
}: AcademicEducationProps): ReactElement => (
  <Stack spacing={2}>
    <Typography fontWeight="700" textTransform="uppercase">
      {courseTitle}
    </Typography>
    <Typography fontWeight="300" textTransform="uppercase">
      {institutionName}
    </Typography>
    <Typography fontWeight="300">{`${period.startYear}${
      period.endYear ? ` - ${period.endYear}` : ""
    }`}</Typography>
  </Stack>
);

export default AcademicEducationView;
