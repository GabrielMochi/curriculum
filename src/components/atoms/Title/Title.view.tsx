import type { ReactElement } from "react";
import { Typography } from "@mui/material";
import type { TitleProps } from "./Title.interface";

const TitleView = (props: TitleProps): ReactElement => <Typography variant="h5" {...props} />;

export default TitleView;
