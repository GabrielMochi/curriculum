import type { ReactElement } from "react";
import type { SpaceProps } from "./Space.interface";
import SpaceView from "./Space.view";
import BuildComponent from "../../../utils/BuildComponent";

const Space = (props: SpaceProps): ReactElement => (
  <BuildComponent props={props} view={SpaceView} />
);

export default Space;
