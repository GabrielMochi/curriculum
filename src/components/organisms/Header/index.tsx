import type { ReactElement } from "react";
import HeaderView from "./Header.view";
import BuildComponent from "../../../utils/BuildComponent";
import useHeaderController from "./Header.controller";

const Header = (): ReactElement => (
  <BuildComponent controller={useHeaderController} view={HeaderView} />
);

export default Header;
