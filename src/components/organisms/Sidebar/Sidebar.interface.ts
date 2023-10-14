import type { TFunction } from "i18next";
import { ComponentProps } from "react";
import type { AcademicEducationProps, SocialProps } from "../../../types";
import type Contact from "../../molecules/Contact";

export type SidebarProps = {
  contactRecords: ComponentProps<typeof Contact>[];
  socialRecords: SocialProps[];
  academicEducationRecords: AcademicEducationProps[];
};

export type SidebarControllerReturn = {
  t: TFunction;
};
