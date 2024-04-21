import type { ReactElement } from "react";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import MainView from "./Main.view";
import useMainController from "./Main.controller";

const Main = (): ReactElement => (
  <ComponentBuilder view={MainView} controller={useMainController} />
);

export default Main;
