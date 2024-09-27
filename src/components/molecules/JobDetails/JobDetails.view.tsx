import type { ReactElement } from "react";
import { Box, Chip, Typography } from "@mui/material";
import dayjs from "dayjs";
import { subslate } from "subslate";
import type { JobDetailsProps } from "./JobDetails.interface";
import Text from "../../atoms/Text";
import type { TranslationControllerReturn } from "../../../common/controllers/Translation.controller";
import MarkdownText from "../../atoms/MarkdownText";
import Space from "../../atoms/Space";
import { FeatureFlag } from "../../../elements";

const JobDetailsView = ({
  t,
  company,
  jobTitle,
  period,
  location,
  description,
  skills,
}: JobDetailsProps & TranslationControllerReturn): ReactElement => (
  <Box component="section">
    <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={2}>
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
    <Space height={16} />
    <MarkdownText
      textAlign="justify"
      minHeight={16}
      sx={{ "& ul": { paddingInlineStart: "16px" } }}
    >
      {description}
    </MarkdownText>
    <FeatureFlag featureFlagKey="showSkillsChips">
      <Space height={16} />
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
    </FeatureFlag>
  </Box>
);

export default JobDetailsView;
