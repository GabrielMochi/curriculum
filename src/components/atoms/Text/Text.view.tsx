import type { ReactElement } from "react";
import { Typography } from "@mui/material";
import type { TextProps } from "./Text.interface";

const TextView = (props: TextProps): ReactElement => <Typography variant="body1" {...props} />;

export default TextView;
