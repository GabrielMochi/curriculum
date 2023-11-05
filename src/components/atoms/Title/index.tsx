import type { ReactElement } from "react";
import type { TitleProps } from "./Title.interface";
import BuildComponent from "../../../utils/BuildComponent";
import TitleView from "./Title.view";

const Title = (props: TitleProps): ReactElement => (
  <BuildComponent props={props} view={TitleView} />
);

export default Title;
