import type { ReactElement } from "react";
import type { TextProps } from "./Text.interface";
import BuildComponent from "../../../utils/BuildComponent";
import TextView from "./Text.view";

const Title = (props: TextProps): ReactElement => <BuildComponent props={props} view={TextView} />;

export default Title;
