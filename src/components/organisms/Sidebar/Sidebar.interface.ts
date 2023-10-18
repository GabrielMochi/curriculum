import type { TFunction } from "i18next";
import type { ComponentProps } from "react";
import type Contact from "../../molecules/Contact";
import type Social from "../../molecules/Social";
import type AcademicEducation from "../../molecules/AcademicEducation";

export type SidebarControllerReturn = {
  t: TFunction;
  contactRecords: ComponentProps<typeof Contact>[];
  socialRecords: ComponentProps<typeof Social>[];
  academicEducationRecords: ComponentProps<typeof AcademicEducation>[];
};
