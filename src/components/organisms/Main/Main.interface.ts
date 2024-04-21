import type { ControllerWithTranslation } from "../../../types";
import type { JobDetailsProps } from "../../molecules/JobDetails/JobDetails.interface";

export type MainControllerReturn = ControllerWithTranslation<{
  jobDetailsRecords: JobDetailsProps[];
}>;
