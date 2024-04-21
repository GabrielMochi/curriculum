import type { ComponentProps } from "react";
import type Contact from "../../molecules/Contact";
import type Social from "../../molecules/Social";
import type AcademicEducation from "../../molecules/AcademicEducation";
import type { ControllerWithTranslation } from "../../../types";

export type SidebarControllerReturn = ControllerWithTranslation<{
  contactRecords: ComponentProps<typeof Contact>[];
  socialRecords: ComponentProps<typeof Social>[];
  academicEducationRecords: ComponentProps<typeof AcademicEducation>[];
}>;
