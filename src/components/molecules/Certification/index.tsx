import type { ReactElement } from "react";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import type { CertificationProps } from "./Certification.interface";
import CertificationView from "./Certification.view";

const Certification = (props: CertificationProps): ReactElement => (
  <ComponentBuilder props={props} view={CertificationView} />
);

export default Certification;
