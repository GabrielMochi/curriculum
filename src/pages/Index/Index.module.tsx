import type { ReactElement } from "react";
import IndexView from "./Index.view";
import useIndexController from "./Index.controller";

const IndexModule = (): ReactElement => {
  const indexController = useIndexController();

  return <IndexView {...indexController} />;
};

export default IndexModule;
