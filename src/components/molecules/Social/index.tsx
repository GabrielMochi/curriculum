import type { ReactElement } from "react";
import BuildComponent from "../../../utils/BuildComponent";
import type { SocialProps } from "./Social.interface";
import SocialView from "./Social.view";

const Social = (props: SocialProps): ReactElement => (
  <BuildComponent props={props} view={SocialView} />
);

export default Social;
