import type { ReactElement } from "react";
import type { TextProps } from "./Text.interface";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import TextView from "./Text.view";

const Title = (props: TextProps): ReactElement => (
  <ComponentBuilder props={props} view={TextView} />
);

export default Title;
