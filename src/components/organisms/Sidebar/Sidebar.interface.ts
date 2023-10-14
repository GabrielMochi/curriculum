import type { TFunction } from "i18next";
import { ComponentProps } from "react";
import type { AcademicEducationProps } from "../../../types";
import type Contact from "../../molecules/Contact";
import type Social from "../../molecules/Social";

export type SidebarProps = {
  contactRecords: ComponentProps<typeof Contact>[];
  socialRecords: ComponentProps<typeof Social>[];
  academicEducationRecords: AcademicEducationProps[];
};

export type SidebarControllerReturn = {
  t: TFunction;
};
