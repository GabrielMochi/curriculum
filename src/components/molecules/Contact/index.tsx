import type { ReactElement } from "react";
import type { ContactProps } from "./Contact.interface";
import BuildComponent from "../../../utils/BuildComponent";
import ContactView from "./Contact.view";

const Contact = (props: ContactProps): ReactElement => (
  <BuildComponent props={props} view={ContactView} />
);

export default Contact;
