import type { ReactElement } from "react";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import type { AcademicEducationProps } from "./AcademicEducation.interface";
import AcademicEducationView from "./AcademicEducation.view";
import useTranslationController from "../../../common/controllers/Translation.controller";

const AcademicEducation = (props: AcademicEducationProps): ReactElement => (
  <ComponentBuilder
    controller={useTranslationController}
    props={props}
    view={AcademicEducationView}
  />
);

export default AcademicEducation;
