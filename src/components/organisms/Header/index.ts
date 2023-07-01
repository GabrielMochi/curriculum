import type { ReactNode } from "react";
import Header from "./Header.module";

export type HeaderProps = {
  title: ReactNode;
  subTitle: string;
};

export default Header;
