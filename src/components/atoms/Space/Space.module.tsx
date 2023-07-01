import type { ReactElement } from "react";
import type { SpaceProps } from "./index";
import SpaceView from "./Space.view";

const SpaceModule = (props: SpaceProps): ReactElement => <SpaceView {...props} />;

export default SpaceModule;
