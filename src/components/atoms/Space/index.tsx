import type { ReactElement } from "react";
import type { SpaceProps } from "./interface";
import SpaceView from "./Space.view";

const Space = (props: SpaceProps): ReactElement => <SpaceView {...props} />;

export default Space;
