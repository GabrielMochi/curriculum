import type { ReactElement } from "react";
import type { TitleProps } from "./Title.interface";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import TitleView from "./Title.view";

const Title = (props: TitleProps): ReactElement => (
  <ComponentBuilder props={props} view={TitleView} />
);

export default Title;
