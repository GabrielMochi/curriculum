import type { ReactElement } from "react";
import type { CalloutProps } from "./Callout.interface";
import BuildComponent from "../../../utils/BuildComponent";
import CalloutView from "./Callout.view";

const Callout = (props: CalloutProps): ReactElement => (
  <BuildComponent props={props} view={CalloutView} />
);

export default Callout;
