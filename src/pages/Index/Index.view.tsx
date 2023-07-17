import type { ReactElement } from "react";
import type { IndexControllerReturnType } from "./Index.controller";
import DefaultTemplate from "../../components/templates/DefaultTemplate";

const IndexView = ({ defaultTemplateData }: IndexControllerReturnType): ReactElement => (
  <DefaultTemplate {...defaultTemplateData} />
);

export default IndexView;
