import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { ContactProps } from "./Contact.interface";
import Text from "../../atoms/Text";

const ContactView = ({ label, value }: ContactProps): ReactElement => (
  <Box>
    <Text fontWeight="700" textTransform="uppercase">
      {label}
    </Text>
    <Text fontWeight="300">{value}</Text>
  </Box>
);

export default ContactView;
