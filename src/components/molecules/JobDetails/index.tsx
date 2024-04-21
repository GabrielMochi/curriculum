import type { ReactElement } from "react";
import type { JobDetailsProps } from "./JobDetails.interface";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import JobDetailsView from "./JobDetails.view";
import useTranslationController, {
  TranslationControllerReturn,
} from "../../../common/controllers/Translation.controller";

const JobDetails = (props: JobDetailsProps): ReactElement => (
  <ComponentBuilder<JobDetailsProps, TranslationControllerReturn>
    props={props}
    controller={useTranslationController}
    view={JobDetailsView}
  />
);

export default JobDetails;
