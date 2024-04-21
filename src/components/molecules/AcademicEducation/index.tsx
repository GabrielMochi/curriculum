import type { ReactElement } from "react";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import type { AcademicEducationProps } from "./AcademicEducation.interface";
import AcademicEducationView from "./AcademicEducation.view";

const AcademicEducation = (props: AcademicEducationProps): ReactElement => (
  <ComponentBuilder props={props} view={AcademicEducationView} />
);

export default AcademicEducation;
