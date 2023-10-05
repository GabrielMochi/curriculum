import type { ReactElement } from "react";
import type { HeaderProps } from "./interface";
import HeaderView from "./Header.view";
import BuildComponent from "../../../utils/BuildComponent";

const Header = (props: HeaderProps): ReactElement => (
  <BuildComponent props={props} view={HeaderView} />
);

export default Header;
