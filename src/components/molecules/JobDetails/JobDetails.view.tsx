import type { ReactElement } from "react";
import { Box, Chip } from "@mui/material";
import dayjs from "dayjs";
import { subslate } from "subslate";
import type { JobDetailsControllerReturn, JobDetailsProps } from "./JobDetails.interface";
import Space from "../../atoms/Space";
import Text from "../../atoms/Text";

const JobDetailsView = ({
  t,
  company,
  jobTitle,
  period,
  location,
  description,
  skills,
}: JobDetailsProps & JobDetailsControllerReturn): ReactElement => (
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
              ? dayjs(period.startDate).format(t("professionalHistory.periodDateFormat"))
              : t("professionalHistory.present"),
            city: location.city,
            state: location.state,
            country: location.country,
          },
          { startStopPairs: ["{{", "}}"] },
        )}
      </Text>
    </Box>
    <Space height={8} />
    <Box>
      <Text>{description}</Text>
    </Box>
    <Space height={8} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap={4}
      sx={{ "::after": { content: "", flex: "auto" } }}
    >
      {skills.map((skill) => (
        <Chip key={skill} label={skill} variant="outlined" color="primary" />
      ))}
    </Box>
  </Box>
);

export default JobDetailsView;
