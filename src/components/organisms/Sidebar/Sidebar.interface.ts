import type { TFunction } from "i18next";
import type { AcademicEducationProps, ContactProps, SocialProps } from "../../../types";

export type SidebarProps = {
  contactRecords: ContactProps[];
  socialRecords: SocialProps[];
  academicEducationRecords: AcademicEducationProps[];
};

export type SidebarControllerReturn = {
  t: TFunction;
};
