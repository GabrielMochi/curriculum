import type { ReactElement } from "react";
import { Typography } from "@mui/material";
import type { CalloutProps } from "./Callout.interface";

const CalloutView = (props: CalloutProps): ReactElement => <Typography variant="h2" {...props} />;

export default CalloutView;
