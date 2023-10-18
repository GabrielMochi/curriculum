import type { ReactElement } from "react";
import type { JobDetailsProps } from "./JobDetails.interface";
import BuildComponent from "../../../utils/BuildComponent";
import JobDetailsView from "./JobDetails.view";
import useJobDetailsController from "./JobDetails.controller";

const JobDetails = (props: JobDetailsProps): ReactElement => (
  <BuildComponent props={props} controller={useJobDetailsController} view={JobDetailsView} />
);

export default JobDetails;
