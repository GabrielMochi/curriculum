import type { TFunction } from "i18next";
import { ComponentProps } from "react";
import type Contact from "../../molecules/Contact";
import type Social from "../../molecules/Social";
import type AcademicEducation from "../../molecules/AcademicEducation";

export type SidebarProps = {
  contactRecords: ComponentProps<typeof Contact>[];
  socialRecords: ComponentProps<typeof Social>[];
  academicEducationRecords: ComponentProps<typeof AcademicEducation>[];
};

export type SidebarControllerReturn = {
  t: TFunction;
};
