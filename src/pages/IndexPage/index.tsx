import type { ReactElement } from "react";
import IndexPageView from "./IndexPage.view";
import useIndexPageController from "./IndexPage.controller";
import BuildComponent from "../../utils/BuildComponent";

const IndexPage = (): ReactElement => (
  <BuildComponent controller={useIndexPageController} view={IndexPageView} />
);

export default IndexPage;
