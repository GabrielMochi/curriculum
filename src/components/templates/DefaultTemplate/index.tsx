import type { ReactElement } from "react";
import type { DefaultTemplateProps } from "./DefaultTemplate.interface";
import DefaultTemplateView from "./DefaultTemplate.view";
import BuildComponent from "../../../utils/BuildComponent";

const DefaultTemplate = (props: DefaultTemplateProps): ReactElement => (
  <BuildComponent props={props} view={DefaultTemplateView} />
);

export default DefaultTemplate;
