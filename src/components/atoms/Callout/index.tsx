import type { ReactElement } from "react";
import type { CalloutProps } from "./Callout.interface";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import CalloutView from "./Callout.view";

const Callout = (props: CalloutProps): ReactElement => (
  <ComponentBuilder props={props} view={CalloutView} />
);

export default Callout;
