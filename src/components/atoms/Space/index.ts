import type { BoxProps } from "@mui/material";
import Space from "./Space.module";

export type SpaceProps = Required<Pick<BoxProps, "height">>;

export default Space;
