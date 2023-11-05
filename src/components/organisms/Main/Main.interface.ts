import type { TFunction } from "i18next";
import type { ComponentProps } from "react";
import type JobDetails from "../../molecules/JobDetails";

export type MainControllerReturn = {
  t: TFunction;
  jobDetailsRecords: ComponentProps<typeof JobDetails>[];
};
