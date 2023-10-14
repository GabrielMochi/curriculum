import type { ReactElement } from "react";
import BuildComponent from "../../../utils/BuildComponent";
import type { AcademicEducationProps } from "./AcademicEducation.interface";
import AcademicEducationView from "./AcademicEducation.view";

const AcademicEducation = (props: AcademicEducationProps): ReactElement => (
  <BuildComponent props={props} view={AcademicEducationView} />
);

export default AcademicEducation;
