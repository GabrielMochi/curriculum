import type { ReactElement } from "react";
import type { IndexControllerReturn } from "./IndexPage.interface";
import DefaultTemplate from "../../components/templates/DefaultTemplate";

const IndexPageView = ({ defaultTemplateData }: IndexControllerReturn): ReactElement => (
  <DefaultTemplate {...defaultTemplateData} />
);

export default IndexPageView;
