import type { ReactElement } from "react";
import HeaderView from "./Header.view";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import type { EmptyProps } from "../../../types";
import useTranslationController, {
  TranslationControllerReturn,
} from "../../../common/controllers/Translation.controller";

const Header = (): ReactElement => (
  <ComponentBuilder<EmptyProps, TranslationControllerReturn>
    controller={useTranslationController}
    view={HeaderView}
  />
);

export default Header;
