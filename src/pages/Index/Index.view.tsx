import type { ReactElement } from "react";
import type { IndexControllerReturn } from "./Index.controller";
import DefaultTemplate from "../../components/templates/DefaultTemplate";

const IndexView = ({ defaultTemplateData }: IndexControllerReturn): ReactElement => (
  <DefaultTemplate {...defaultTemplateData} />
);

export default IndexView;
