import type { ReactElement } from "react";
import type { DefaultTemplateProps } from "./index";
import DefaultTemplateView from "./DefaultTemplate.view";

const DefaultTemplateModule = (props: DefaultTemplateProps): ReactElement => (
  <DefaultTemplateView {...props} />
);

export default DefaultTemplateModule;
