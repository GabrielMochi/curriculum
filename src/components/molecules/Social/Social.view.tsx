import type { ReactElement } from "react";
import { Link } from "@mui/material";
import type { SocialProps } from "./Social.interface";
import Text from "../../atoms/Text";

const SocialView = ({ label, url, logo }: SocialProps): ReactElement => (
  <Link href={url} display="inline-flex" alignItems="center">
    <img src={logo} alt={label} width={20} height={20} />
    <Text ml={1} fontWeight="300">
      {label}
    </Text>
  </Link>
);

export default SocialView;
