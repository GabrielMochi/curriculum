import type { ControllerWithTranslation } from "../../../types";
import type { ContactProps } from "../../molecules/Contact/Contact.interface";
import type { SocialProps } from "../../molecules/Social/Social.interface";
import type { AcademicEducationProps } from "../../molecules/AcademicEducation/AcademicEducation.interface";
import type { CertificationProps } from "../../molecules/Certification/Certification.interface";

export type SidebarControllerReturn = ControllerWithTranslation<{
  contactRecords: ContactProps[];
  socialRecords: SocialProps[];
  academicEducationRecords: AcademicEducationProps[];
  certificationRecords: CertificationProps[];
}>;
