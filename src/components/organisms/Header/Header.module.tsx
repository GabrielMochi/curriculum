import type { ReactElement } from "react";
import type { HeaderProps } from "./index";
import HeaderView from "./Header.view";

const HeaderModule = (props: HeaderProps): ReactElement => <HeaderView {...props} />;

export default HeaderModule;
