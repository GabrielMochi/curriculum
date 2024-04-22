import type { ReactElement } from "react";
import { Stack } from "@mui/material";
import type { CertificationProps } from "./Certification.interface";
import Text from "../../atoms/Text";

const CertificationView = ({
  certificationTitle,
  institutionName,
  year,
}: CertificationProps): ReactElement => (
  <Stack spacing={1}>
    <Text fontWeight="700" textTransform="uppercase">
      {certificationTitle}
    </Text>
    <Text fontWeight="300" textTransform="uppercase">
      {institutionName}
    </Text>
    <Text fontWeight="300">{year}</Text>
  </Stack>
);

export default CertificationView;
