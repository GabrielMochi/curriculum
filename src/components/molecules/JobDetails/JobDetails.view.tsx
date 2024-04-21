import type { ReactElement } from "react";
import { Box, Chip, Typography } from "@mui/material";
import dayjs from "dayjs";
import { subslate } from "subslate";
import md5 from "md5";
import type { JobDetailsProps } from "./JobDetails.interface";
import Space from "../../atoms/Space";
import Text from "../../atoms/Text";
import type { ControllerWithTranslation } from "../../../types";

const JobDetailsView = ({
  t,
  company,
  jobTitle,
  period,
  location,
  description,
  skills,
}: JobDetailsProps & ControllerWithTranslation): ReactElement => (
  <Box component="section">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Text fontWeight="700">
        {company} | {jobTitle}
      </Text>
      <Text fontWeight="300" fontStyle="italic">
        {subslate(
          "{{startDate}} – {{endDate}} | {{city}}, {{state}}, {{country}}",
          {
            startDate: dayjs(period.startDate).format(t("professionalHistory.periodDateFormat")),
            endDate: period.endDate
              ? dayjs(period.endDate).format(t("professionalHistory.periodDateFormat"))
              : t("professionalHistory.present"),
            city: location.city,
            state: location.state,
            country: location.country,
          },
          { startStopPairs: ["{{", "}}"] },
        )}
      </Text>
    </Box>
    <Space height={12} />
    <Box>
      {description.split("\n").map((text, i) => (
        <Text key={md5(text).concat(i.toString())} textAlign="justify" minHeight={16}>
          {text}
        </Text>
      ))}
    </Box>
    <Space height={12} />
    <Box display="flex" alignItems="center" flexWrap="wrap" rowGap={1} columnGap={2}>
      {skills.map((skill) => (
        <Chip
          key={skill}
          label={<Typography variant="body2">{skill}</Typography>}
          variant="outlined"
          color="default"
        />
      ))}
    </Box>
  </Box>
);

export default JobDetailsView;
