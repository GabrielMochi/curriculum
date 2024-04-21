import type { ReactElement } from "react";
import HeaderView from "./Header.view";
import BuildComponent from "../../../utils/BuildComponent";
import type { EmptyProps } from "../../../types";
import useTranslationController, {
  TranslationControllerReturn,
} from "../../../common/controllers/Translation.controller";

const Header = (): ReactElement => (
  <BuildComponent<EmptyProps, TranslationControllerReturn>
    controller={useTranslationController}
    view={HeaderView}
  />
);

export default Header;
