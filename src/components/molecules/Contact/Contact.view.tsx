import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { ContactProps } from "./Contact.interface";

const ContactView = ({ label, value }: ContactProps): ReactElement => (
  <Box>
    <Typography fontWeight="700" textTransform="uppercase">
      {label}
    </Typography>
    <Typography fontWeight="300">{value}</Typography>
  </Box>
);

export default ContactView;
