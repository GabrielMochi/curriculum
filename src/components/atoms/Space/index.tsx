import type { ReactElement } from "react";
import type { SpaceProps } from "./Space.interface";
import SpaceView from "./Space.view";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";

const Space = (props: SpaceProps): ReactElement => (
  <ComponentBuilder props={props} view={SpaceView} />
);

export default Space;
