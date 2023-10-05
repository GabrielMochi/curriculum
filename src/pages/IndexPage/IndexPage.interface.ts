import type { ComponentProps } from "react";
import type DefaultTemplate from "../../components/templates/DefaultTemplate";

type DefaultTemplateProps = ComponentProps<typeof DefaultTemplate>;

export type IndexControllerReturn = {
  defaultTemplateData: DefaultTemplateProps;
};
