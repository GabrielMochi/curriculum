import type { ReactElement } from "react";
import IndexPageView from "./IndexPage.view";
import BuildComponent from "../../utils/BuildComponent";

const IndexPage = (): ReactElement => <BuildComponent view={IndexPageView} />;

export default IndexPage;
