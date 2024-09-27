import type { ReactElement } from "react";
import { Box, Stack } from "@mui/material";
import type { MainControllerReturn } from "./Main.interface";
import globalCss from "../../../theme/globalCss";
import Space from "../../atoms/Space";
import JobDetails from "../../molecules/JobDetails";
import Title from "../../atoms/Title";
import MarkdownText from "../../atoms/MarkdownText";
import { FeatureFlag } from "../../../elements";

const MainView = ({ t, jobDetailsRecords }: MainControllerReturn): ReactElement => (
  <Box
    component="main"
    height="100%"
    maxWidth="1024px"
    mx="auto"
    px={globalCss.horizontalSpacing}
    py={globalCss.verticalSpacing}
  >
    <FeatureFlag featureFlagKey="showAbout">
      <Box>
        <Title textTransform="uppercase">{t("about.title")}</Title>
        <Space height={globalCss.defaultIntercalationSpacing} />
        <MarkdownText textAlign="justify">{t("about.description")}</MarkdownText>
      </Box>
      <Space height={{ xs: "32px", md: "48px" }} />
    </FeatureFlag>
    <FeatureFlag featureFlagKey="showProfessionalExperience">
      <Box>
        <Title textTransform="uppercase">{t("professionalHistory.title")}</Title>
        <Space height={globalCss.defaultIntercalationSpacing} />
        <Stack spacing={4}>
          {jobDetailsRecords.map((jobDetails) => (
            <JobDetails key={jobDetails.jobTitle.concat(jobDetails.company)} {...jobDetails} />
          ))}
        </Stack>
      </Box>
    </FeatureFlag>
  </Box>
);

export default MainView;
