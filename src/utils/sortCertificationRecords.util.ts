import type { CertificationProps } from "../components/molecules/Certification/Certification.interface";

export const sortCertificationRecords = (
  certificationRecords: CertificationProps[],
): CertificationProps[] => certificationRecords.sort((a, b) => b.year - a.year);
