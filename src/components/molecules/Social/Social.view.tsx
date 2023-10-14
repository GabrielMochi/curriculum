import type { ReactElement } from "react";
import { Link, Typography } from "@mui/material";
import type { SocialProps } from "./Social.interface";

const SocialView = ({ label, url, logo }: SocialProps): ReactElement => (
  <Link href={url} display="inline-flex" alignItems="center">
    <img src={logo} alt={label} width={20} height={20} />
    <Typography ml={1} fontWeight="300">
      {label}
    </Typography>
  </Link>
);

export default SocialView;
