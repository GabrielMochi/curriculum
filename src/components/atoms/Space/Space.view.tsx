import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { SpaceProps } from "./index";

const SpaceView = ({ height }: SpaceProps): ReactElement => <Box height={height} />;

export default SpaceView;
