import type { ReactElement } from "react";
import IndexPageView from "./IndexPage.view";
import ComponentBuilder from "../../common/builders/ComponentBuilder";

const IndexPage = (): ReactElement => <ComponentBuilder view={IndexPageView} />;

export default IndexPage;
