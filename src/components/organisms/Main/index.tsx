import type { ReactElement } from "react";
import BuildComponent from "../../../utils/BuildComponent";
import MainView from "./Main.view";
import useMainController from "./Main.controller";

const Main = (): ReactElement => <BuildComponent view={MainView} controller={useMainController} />;

export default Main;
