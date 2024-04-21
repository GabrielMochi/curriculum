import type { ReactElement } from "react";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import type { SocialProps } from "./Social.interface";
import SocialView from "./Social.view";

const Social = (props: SocialProps): ReactElement => (
  <ComponentBuilder props={props} view={SocialView} />
);

export default Social;
